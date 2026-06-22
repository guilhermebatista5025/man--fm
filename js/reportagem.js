// Dicionário com dados das reportagens
const reportagensData = {
  "prefeito-entrevista": {
    title: "Prefeito Arnaldinho Borgo detalha investimentos em Vila Velha",
    category: "Entrevista",
    date: "06 de Junho de 2026",
    duration: "15:20",
    videoId: "LqVw59v3aLg",
    thumbnail: "prefeito_entrevista.png",
    transcript: `
      <p><strong>Introdução da Entrevista:</strong><br>
      Entrevista conduzida pelos âncoras no estúdio da Rádio Maná FM recebendo o Prefeito de Vila Velha, Arnaldinho Borgo. O foco principal da conversa foi detalhar as recentes obras públicas e o andamento do plano de investimentos municipal.</p>

      <p><strong>Investimentos em Macrodrenagem e Saneamento:</strong><br>
      O prefeito detalhou que estão sendo injetados mais de R$ 500 milhões em obras estruturais essenciais nas regiões mais sensíveis a chuvas intensas. 
      <em>"Estamos trabalhando fortemente para colocar fim ao drama histórico de alagamentos que atinge regiões como Cobilândia e Pontal de Santa Mônica. São novas estações de bombeamento e galerias de dimensões gigantescas que já começam a dar resultados práticos."</em></p>

      <p><strong>Atrativos Turísticos e Orla de Vila Velha:</strong><br>
      Sobre as melhorias na orla e praias de Itaparica e Itapoã, o gestor destacou a implantação das novas luminárias LED, revitalização dos calçadões e novas ciclovias conectando o litoral. 
      <em>"Nosso objetivo é transformar Vila Velha em uma das principais referências nacionais de turismo costeiro, gerando diretamente emprego e renda para o comércio local capixaba."</em></p>

      <p><strong>Incentivo Comercial e Tecnológico:</strong><br>
      Finalizando a entrevista, Arnaldinho explicou as políticas de atração de startups e empresas de tecnologia mediante redução de alíquotas de ISS, impulsionando a inovação no município.</p>
    `
  },
  "festa-aniversario": {
    title: "Vila Velha 489 Anos: Celebração e Shows no Aniversário da Cidade",
    category: "Especial",
    date: "23 de Maio de 2026",
    duration: "08:45",
    videoId: "O4B-rV-i69c",
    thumbnail: "festa_vila_velha.png",
    transcript: `
      <p><strong>Resumo do Evento:</strong><br>
      A Rádio Maná FM cobreu de perto todas as festividades que celebraram os 489 anos de história e início de colonização de Vila Velha, o berço histórico do solo capixaba.</p>

      <p><strong>A Solenidade de Transferência de Capital:</strong><br>
      Um dos momentos mais solenes foi a transferência simbólica da capital do Estado do Espírito Santo para Vila Velha, um ato oficial que contou com a presença de diversas autoridades estaduais e do Governador do Estado. A solenidade lembrou a bravura dos colonizadores e a importância do município na fundação do estado.</p>

      <p><strong>Shows Nacionais na Prainha:</strong><br>
      O festival montado na região da Prainha atraiu mais de 100 mil pessoas durante o fim de semana prolongado, trazendo atrações culturais nacionais e locais que agitaram a população em clima de festa e paz.</p>
    `
  },
  "roteiro-turismo": {
    title: "Roteiro Vila Velha: Do Convento da Penha ao Farol de Santa Luzia",
    category: "Turismo",
    date: "15 de Maio de 2026",
    duration: "12:10",
    videoId: "F5_Z8iR-u0Q",
    thumbnail: "convento_da_penha.png",
    transcript: `
      <p><strong>Guia Turístico Completo:</strong><br>
      Nossa equipe de jornalismo montou um roteiro incrível destacando as melhores opções de passeio histórico, cultural e natural para os ouvintes que desejam desbravar a cidade mais antiga do Espírito Santo.</p>

      <p><strong>O Monumental Convento da Penha:</strong><br>
      Fundado em 1558 pelo frei espanhol Pedro Palácios, o santuário está situado no topo de um penhasco de 154 metros de altura, cercado por uma exuberante reserva de Mata Atlântica. A subida tradicional revela vistas panorâmicas de tirar o fôlego unindo Vila Velha e Vitória.</p>

      <p><strong>Farol de Santa Luzia e Gastronomia:</strong><br>
      Seguindo o roteiro, a reportagem visitou o Farol de Santa Luzia na Praia da Costa, construído na Escócia em 1870 e inaugurado em 1871. Por fim, os ouvintes puderam conferir dicas gastronômicas locais imperdíveis para saborear a verdadeira moqueca e torta capixabas nos restaurantes da orla.</p>
    `
  },
  "mobilidade-urbana": {
    title: "Novo Binário em Vila Velha: Mudanças no Tráfego e Obras de Acesso",
    category: "Cidade",
    date: "10 de Maio de 2026",
    duration: "06:30",
    videoId: "fMcqvveqIVI",
    thumbnail: "transito_vila_velha.png",
    transcript: `
      <p><strong>Início das Obras de Trânsito:</strong><br>
      A reportagem de mobilidade urbana da Maná FM acompanhou as primeiras intervenções práticas nas vias que compõem o novo binário de Vila Velha, um projeto desenhado para otimizar o fluxo de veículos na região central.</p>

      <p><strong>Semáforos Inteligentes e Sentidos Únicos:</strong><br>
      Em entrevista, o Secretário de Engenharia de Tráfego explicou que a sincronização digital em tempo real dos semáforos e a adoção de sentidos únicos em avenidas paralelas reduzirão o tempo médio de retenção nos horários de maior movimento em até 35%.</p>

      <p><strong>Feedback e Período de Adaptação:</strong><br>
      Conversamos com comerciantes e motoristas locais. A maioria concorda com a necessidade das obras, embora apontem que o tráfego precisará de monitoramento contínuo por parte dos guardas municipais até a adaptação completa da sinalização.</p>
    `
  }
};

// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "prefeito-entrevista";
  const reportContent = reportagensData[id] || reportagensData["prefeito-entrevista"];

  renderReport(id, reportContent);
});

// Renderização Dinâmica
function renderReport(currentId, data) {
  const container = document.getElementById("reportagem-dinamica-content");
  if (!container) return;

  // Atualizar título do documento
  document.title = `${data.title} | Rádio Maná FM`;

  // Gerar sidebar com os outros 3 itens recomendados
  let sidebarHtml = "";
  for (const [key, item] of Object.entries(reportagensData)) {
    if (key !== currentId) {
      sidebarHtml += `
        <a href="?id=${key}" class="sidebar-report-item" aria-label="Ver reportagem: ${item.title}">
          <div class="sidebar-thumb">
            <img src="../assets/images/reports/${item.thumbnail}" alt="${item.title}">
          </div>
          <div class="sidebar-info">
            <h4>${item.title}</h4>
            <span>${item.category} • ${item.duration}</span>
          </div>
        </a>
      `;
    }
  }

  container.innerHTML = `
    <!-- Cabeçalho -->
    <div class="reportagem-header">
      <h1 class="report-title-main">${data.title}</h1>
      <div class="report-meta-info">
        <span class="meta-badge">${data.category}</span>
        <span class="meta-text">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Publicado em: ${data.date}
        </span>
        <span class="meta-text">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Duração: ${data.duration}
        </span>
      </div>
    </div>

    <!-- Hero Player -->
    <div class="video-hero-wrapper">
      <iframe src="https://www.youtube-nocookie.com/embed/${data.videoId}?autoplay=1&mute=0&rel=0" 
              title="${data.title}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
    </div>

    <!-- Layout em Grade -->
    <div class="reportagem-content-grid">
      <!-- Coluna de Transcrição -->
      <article class="transcricao-column">
        <h2>Descrição & Transcrição da Matéria</h2>
        <div class="transcricao-body">
          ${data.transcript}
        </div>
      </article>

      <!-- Coluna Lateral -->
      <aside class="sidebar-column">
        <h3>Outras Reportagens Gravadas</h3>
        <div class="sidebar-reports-list">
          ${sidebarHtml}
        </div>
      </aside>
    </div>
  `;
}
