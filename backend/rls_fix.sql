-- ==============================================================================
-- CORREÇÃO DE ROW LEVEL SECURITY (RLS) PARA SUPABASE - RÁDIO MANÁ FM
-- Instruções:
-- 1. Acesse seu painel do Supabase (https://supabase.com)
-- 2. Selecione o seu projeto correspondente.
-- 3. No menu lateral esquerdo, vá em "SQL Editor".
-- 4. Clique em "New query" (Nova consulta).
-- 5. Cole o conteúdo deste arquivo inteiro no editor e clique em "Run" (Executar).
-- ==============================================================================

-- ==============================================================================
-- OPÇÃO RECOMENDADA: Desabilitar RLS para as tabelas do projeto.
-- Como seu backend Express controla as requisições e a conexão é feita internamente,
-- desabilitar o RLS é a forma mais simples e segura para o correto funcionamento das APIs.
-- ==============================================================================

ALTER TABLE public.noticias DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.programacao DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.locutores DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrocinadores DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes DISABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- OPÇÃO ALTERNATIVA: Se você preferir manter RLS ativado por motivos de segurança
-- e criar políticas de acesso público irrestrito (para leitura e escrita pública):
-- (Remova as marcas de comentário '--' abaixo caso prefira esta opção em vez da recomendada acima)
-- ==============================================================================

-- -- Liberar acessos públicos para 'noticias'
-- CREATE POLICY "Permitir tudo para noticias publico" ON public.noticias
--   FOR ALL TO public USING (true) WITH CHECK (true);

-- -- Liberar acessos públicos para 'programacao'
-- CREATE POLICY "Permitir tudo para programacao publico" ON public.programacao
--   FOR ALL TO public USING (true) WITH CHECK (true);

-- -- Liberar acessos públicos para 'locutores'
-- CREATE POLICY "Permitir tudo para locutores publico" ON public.locutores
--   FOR ALL TO public USING (true) WITH CHECK (true);

-- -- Liberar acessos públicos para 'patrocinadores'
-- CREATE POLICY "Permitir tudo para patrocinadores publico" ON public.patrocinadores
--   FOR ALL TO public USING (true) WITH CHECK (true);

-- -- Liberar acessos públicos para 'configuracoes'
-- CREATE POLICY "Permitir tudo para configuracoes publico" ON public.configuracoes
--   FOR ALL TO public USING (true) WITH CHECK (true);
