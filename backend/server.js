const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const supabase = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Configuração de Upload de Imagens com Multer (Memória para enviar ao Supabase)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rota estática para fallback local (se sobrar algo em uploads/)
const fs = require('fs');
if (fs.existsSync(path.join(__dirname, 'uploads'))) {
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
}

// Helper para fazer upload no Supabase Storage
async function uploadToSupabase(file) {
    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    
    const { data, error } = await supabase.storage
        .from('uploads')
        .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: false
        });

    if (error) {
        throw new Error(`Erro ao enviar imagem para o Supabase: ${error.message}`);
    }

    const { data: publicData } = supabase.storage.from('uploads').getPublicUrl(fileName);
    return publicData.publicUrl;
}

// ==========================================
// ROTAS DE NOTÍCIAS
// ==========================================
app.get('/api/noticias', async (req, res) => {
    const { data, error } = await supabase.from('noticias').select('*').order('id', { ascending: false });
    if (error) {
        console.error("Erro ao buscar notícias:", error);
        return res.status(500).json({ error: error.message });
    }
    const mapped = (data || []).map(item => ({
        ...item,
        textoCompleto: item.textocompleto
    }));
    res.json(mapped);
});

app.post('/api/noticias', upload.single('imagem'), async (req, res) => {
    try {
        const { titulo, resumo, textoCompleto, categoria, data: dateData } = req.body;
        let imagemUrl = req.body.imagemUrl || req.body.imagem;

        if (req.file) {
            imagemUrl = await uploadToSupabase(req.file);
        }

        const { data, error } = await supabase.from('noticias')
            .insert([{ titulo, resumo, textocompleto: textoCompleto, categoria, imagem: imagemUrl, data: dateData }])
            .select();
            
        if (error) throw error;
        
        const mapped = data && data[0] ? {
            ...data[0],
            textoCompleto: data[0].textocompleto
        } : null;

        res.status(201).json(mapped);
    } catch (err) {
        console.error("Erro ao criar notícia:", err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/noticias/:id', upload.single('imagem'), async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, resumo, textoCompleto, categoria, data: dateData } = req.body;
        let imagemUrl = req.body.imagemUrl || req.body.imagem;

        if (req.file) {
            imagemUrl = await uploadToSupabase(req.file);
        }

        const { data, error } = await supabase.from('noticias')
            .update({ titulo, resumo, textocompleto: textoCompleto, categoria, imagem: imagemUrl, data: dateData })
            .eq('id', id)
            .select();
            
        if (error) throw error;
        
        const mapped = data && data[0] ? {
            ...data[0],
            textoCompleto: data[0].textocompleto
        } : null;

        res.json(mapped);
    } catch (err) {
        console.error("Erro ao atualizar notícia:", err);
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/noticias/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('noticias').delete().eq('id', id);
    if (error) {
        console.error("Erro ao deletar notícia:", error);
        return res.status(500).json({ error: error.message });
    }
    res.json({ message: "Notícia deletada com sucesso." });
});

// ==========================================
// ROTAS DE PROGRAMAÇÃO
// ==========================================
app.get('/api/programacao', async (req, res) => {
    const { data, error } = await supabase.from('programacao').select('*').order('ordem', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.post('/api/programacao', upload.none(), async (req, res) => {
    const { titulo, horario, locutor, ordem } = req.body;
    const { data, error } = await supabase.from('programacao')
        .insert([{ titulo, horario, locutor, ordem }])
        .select();
    if (error) {
        console.error("Erro ao criar programação:", error);
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data[0]);
});

app.put('/api/programacao/:id', upload.none(), async (req, res) => {
    const { id } = req.params;
    const { titulo, horario, locutor, ordem } = req.body;
    const { data, error } = await supabase.from('programacao')
        .update({ titulo, horario, locutor, ordem })
        .eq('id', id)
        .select();
    if (error) {
        console.error("Erro ao atualizar programação:", error);
        return res.status(500).json({ error: error.message });
    }
    res.json(data[0]);
});

app.delete('/api/programacao/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('programacao').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: "Programa deletado." });
});

// ==========================================
// ROTAS DE LOCUTORES
// ==========================================
app.get('/api/locutores', async (req, res) => {
    const { data, error } = await supabase.from('locutores').select('*').order('ordem', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.post('/api/locutores', upload.single('foto'), async (req, res) => {
    try {
        const { nome, cargo, bio, ordem, instagram, whatsapp } = req.body;
        let fotoUrl = req.body.fotoUrl || req.body.foto;
        if (req.file) fotoUrl = await uploadToSupabase(req.file);

        const { data, error } = await supabase.from('locutores')
            .insert([{ nome, cargo, bio, foto: fotoUrl, ordem, instagram, whatsapp }])
            .select();
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (err) {
        console.error("Erro ao criar locutor:", err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/locutores/:id', upload.single('foto'), async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cargo, bio, ordem, instagram, whatsapp } = req.body;
        let fotoUrl = req.body.fotoUrl || req.body.foto;
        if (req.file) fotoUrl = await uploadToSupabase(req.file);

        const { data, error } = await supabase.from('locutores')
            .update({ nome, cargo, bio, foto: fotoUrl, ordem, instagram, whatsapp })
            .eq('id', id)
            .select();
        if (error) throw error;
        res.json(data[0]);
    } catch (err) {
        console.error("Erro ao atualizar locutor:", err);
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/locutores/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('locutores').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: "Locutor deletado." });
});

// ==========================================
// ROTAS DE PATROCINADORES
// ==========================================
app.get('/api/patrocinadores', async (req, res) => {
    const { data, error } = await supabase.from('patrocinadores').select('*').order('ordem', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.post('/api/patrocinadores', upload.single('logo'), async (req, res) => {
    try {
        const { nome, link, ordem, cnpj, diaPagamento, renovacao, valorPago, status } = req.body;
        let logoUrl = req.body.logoUrl || req.body.logo;
        if (req.file) logoUrl = await uploadToSupabase(req.file);

        const { data, error } = await supabase.from('patrocinadores')
            .insert([{ nome, logo: logoUrl, link, ordem, cnpj, diaPagamento, renovacao, valorPago, status }])
            .select();
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (err) {
        console.error("Erro ao criar patrocinador:", err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/patrocinadores/:id', upload.single('logo'), async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, link, ordem, cnpj, diaPagamento, renovacao, valorPago, status } = req.body;
        let logoUrl = req.body.logoUrl || req.body.logo;
        if (req.file) logoUrl = await uploadToSupabase(req.file);

        const { data, error } = await supabase.from('patrocinadores')
            .update({ nome, logo: logoUrl, link, ordem, cnpj, diaPagamento, renovacao, valorPago, status })
            .eq('id', id)
            .select();
        if (error) throw error;
        res.json(data[0]);
    } catch (err) {
        console.error("Erro ao atualizar patrocinador:", err);
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/patrocinadores/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('patrocinadores').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: "Patrocinador deletado." });
});

// ==========================================
// ROTAS DE CONFIGURAÇÕES (Anúncios e Live)
// ==========================================
app.get('/api/configuracoes', async (req, res) => {
    const { data, error } = await supabase.from('configuracoes').select('*');
    if (error) return res.status(500).json({ error: error.message });
    
    const config = {};
    data.forEach(row => {
        try { config[row.chave] = JSON.parse(row.valor); }
        catch(e) { config[row.chave] = row.valor; }
    });
    res.json(config);
});
app.post('/api/configuracoes', upload.fields([{name: 'adSidebarImg'}, {name: 'adBottomImg'}]), async (req, res) => {
    try {
        const { chave, valor } = req.body;
        let dataToSave = valor;
        
        // Se for enviado arquivos
        if (req.files) {
            if (req.files['adSidebarImg'] && req.files['adSidebarImg'].length > 0) {
                const url = await uploadToSupabase(req.files['adSidebarImg'][0]);
                dataToSave = JSON.stringify({ ...JSON.parse(valor || "{}"), imagem: url });
            }
            if (req.files['adBottomImg'] && req.files['adBottomImg'].length > 0) {
                const url = await uploadToSupabase(req.files['adBottomImg'][0]);
                dataToSave = JSON.stringify({ ...JSON.parse(valor || "{}"), imagem: url });
            }
        }

        const valorString = typeof dataToSave === 'object' ? JSON.stringify(dataToSave) : dataToSave;

        const { error } = await supabase.from('configuracoes')
            .upsert({ chave, valor: valorString }, { onConflict: 'chave' });
            
        if (error) throw error;
        res.json({ message: 'Configuração salva' });
    } catch (err) {
        console.error("Erro ao salvar configuracoes:", err);
        res.status(500).json({ error: err.message });
    }
});

// ==========================================
// PROXY DE TRANSMISSÃO E STATS (Evita Mixed Content / SSL do Icecast)
// ==========================================
app.get('/api/stream', (req, res) => {
    const http = require('http');
    const streamUrl = 'http://95.154.197.82:39982/';
    
    res.setHeader('Content-Type', 'audio/aacp');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    const request = http.get(streamUrl, (streamRes) => {
        streamRes.pipe(res);
    });
    
    request.on('error', (err) => {
        console.error('Erro no proxy de transmissão de áudio:', err.message);
        if (!res.headersSent) {
            res.status(502).send('Transmissão temporariamente indisponível.');
        }
    });

    req.on('close', () => {
        request.destroy();
    });
});

app.get('/api/stats', (req, res) => {
    const http = require('http');
    http.get('http://95.154.197.82:39982/status-json.xsl', (streamRes) => {
        let body = '';
        streamRes.on('data', chunk => body += chunk);
        streamRes.on('end', () => {
            try {
                const data = JSON.parse(body);
                const source = data?.icestats?.source;
                const title = source?.title || '';
                
                let musica = "Ao Vivo";
                let artista = "Rádio Maná FM";
                
                if (title && title.includes(' - ')) {
                    const partes = title.split(' - ');
                    if (partes[0].trim() !== '' && partes[1].trim() !== '') {
                        artista = partes[0].trim();
                        musica = partes[1].trim();
                    } else {
                        musica = title.replace(' - ', '').trim() || 'Ao Vivo';
                    }
                } else if (title && title.trim() !== '') {
                    musica = title.trim();
                }
                
                res.json({ musica, artista });
            } catch (e) {
                res.status(500).json({ error: 'Erro ao analisar JSON de metadados' });
            }
        });
    }).on('error', (err) => {
        res.status(502).json({ error: 'Erro ao buscar metadados do servidor' });
    });
});

// ==========================================
// SERVIR ARQUIVOS ESTÁTICOS DO FRONTEND
// ==========================================
app.use(express.static(path.join(__dirname, '../')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// ==========================================
// INICIAR O SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`- Frontend: http://localhost:${PORT}`);
    console.log(`- Dashboard: http://localhost:${PORT}/admin/index.html`);
});
