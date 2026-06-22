require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("ERRO: As variáveis SUPABASE_URL e SUPABASE_KEY não estão definidas no arquivo .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    },
    realtime: {
        transport: WebSocket
    }
});

console.log("Conectado ao Supabase.");

module.exports = supabase;
