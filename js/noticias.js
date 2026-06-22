// Array de notícias mockadas de alta qualidade e relevância local
const NOTICIAS_MOCK = [
  {
    id: 1,
    titulo: "Marcha para Jesus em Vila Velha reúne milhares de fiéis em dia de louvor e oração",
    resumo: "O tradicional evento cristão reuniu famílias de toda a Grande Vitória com apresentações de música gospel e momentos de intercessão.",
    textoCompleto: "A orla de Vila Velha foi tomada por uma atmosfera de fé e celebração durante a realização da Marcha para Jesus deste ano. O evento, que faz parte do calendário oficial da cidade, reuniu milhares de fiéis que caminharam louvando e orando pela paz na Grande Vitória. Trios elétricos liderados por pastores e cantores gospel nacionais conduziram a multidão com canções inspiradoras e palavras de esperança. A caminhada encerrou-se na Prainha com um grande show de encerramento repleto de adoração. A prefeitura montou uma estrutura especial de trânsito e segurança para dar suporte a todas as famílias e caravanas presentes, que celebraram em total clima de paz e comunhão.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1442473483905-95eb436775f1?auto=format&fit=crop&q=80&w=600",
    data: "04 de Junho de 2026"
  },
  {
    id: 2,
    titulo: "Novo parque linear na orla de Itaparica terá ciclovias e áreas de lazer modernas",
    resumo: "Projeto avaliado em R$ 15 milhões promete transformar a infraestrutura de lazer, integrando esportes e convivência comunitária.",
    textoCompleto: "Foi anunciado na manhã de hoje o início das obras do novo Parque Linear de Itaparica. O projeto, orçado em 15 milhões de reais pela Prefeitura de Vila Velha, prevê a revitalização completa de 2 km da orla marítima. O novo espaço contará com ciclovias exclusivas bidirecionais, pista de cooper com piso emborrachado, três quadras poliesportivas modernas, playgrounds com brinquedos acessíveis, além de uma ampla praça de alimentação ao ar livre. Segundo o secretário de Obras, a previsão de entrega é de 10 meses e o objetivo principal é promover a saúde, o esporte e o turismo na região, transformando o espaço em uma referência de convivência e lazer no estado.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
    data: "04 de Junho de 2026"
  },
  {
    id: 3,
    titulo: "Seleção Brasileira de Beach Soccer treina na Praia de Itaparica visando Copa do Mundo",
    resumo: "Atletas realizam preparação física e tática nas areias capixabas, recebendo o carinho dos torcedores de Vila Velha.",
    textoCompleto: "A areia fina e as excelentes condições climáticas de Vila Velha atraíram a Seleção Brasileira de Beach Soccer. O elenco está concentrado na Praia de Itaparica para uma semana intensa de treinamentos físicos e táticos. Sob o comando da comissão técnica, os atletas se preparam para a disputa da Copa do Mundo de Futebol de Areia, que ocorrerá no próximo semestre. Treinos abertos ao público atraíram centenas de torcedores e crianças das escolinhas de futebol locais, que puderam ver de perto os astros da seleção. O capitão da equipe destacou que o acolhimento do povo capixaba serve como um combustível extra para buscar o título mundial.",
    categoria: "Esporte",
    imagem: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=600",
    data: "04 de Junho de 2026"
  },
  {
    id: 4,
    titulo: "Convento da Penha terá iluminação especial no feriado e programação de missas presenciais",
    resumo: "O maior monumento histórico e religioso do ES estima receber milhares de fiéis e turistas durante o feriado prolongado.",
    textoCompleto: "O Convento da Penha, localizado no alto de um penhasco de 154 metros em Vila Velha, divulgou seu cronograma especial para as festividades religiosas do feriado prolongado. Além da tradicional iluminação cênica noturna, que destacará as cores do Espírito Santo, o monumento contará com missas adicionais campais no campinho do Convento para evitar aglomerações na capela principal. A prefeitura e os organizadores reforçaram que vans de transporte gratuito estarão à disposição de idosos e pessoas com deficiência na subida da ladeira. O comércio no entorno histórico da Prainha também se preparou para receber a alta demanda de turistas capixabas e de estados vizinhos.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600",
    data: "03 de Junho de 2026"
  },
  {
    id: 5,
    titulo: "Festival Gastronômico de Vila Velha reúne chefs renomados e culinária capixaba",
    resumo: "O evento traz pratos autorais, releituras da famosa Torta Capixaba e shows de MPB na Praça do Farol de Santa Luzia.",
    textoCompleto: "Vila Velha sedia a partir desta quinta-feira a 8ª edição do seu aguardado Festival Gastronômico. O evento, montado na histórica Praça do Farol de Santa Luzia, reúne 15 restaurantes locais que prepararam cardápios exclusivos a preços promocionais. O grande destaque são as releituras da tradicional Torta Capixaba e da Moqueca, além de cervejas artesanais produzidas na região metropolitana. Além dos pratos deliciosos, o público poderá acompanhar workshops culinários gratuitos com chefs de renome nacional e curtir apresentações diárias de artistas locais tocando MPB e Jazz. O festival segue até o final do fim de semana com entrada franca.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
    data: "03 de Junho de 2026"
  },
  {
    id: 6,
    titulo: "Rádio Maná FM anuncia transmissão HD e novas promoções com prêmios exclusivos",
    resumo: "Emissora investe em tecnologia digital de ponta para transmissão online e prepara sorteio de prêmios exclusivos.",
    textoCompleto: "A Rádio Maná FM continua inovando e expandindo suas fronteiras digitais. Foi anunciado hoje o lançamento do novo sistema de transmissão HD Online, que garante som com fidelidade de estúdio e latência ultra-baixa, consumindo até 40% menos dados móveis no celular dos ouvintes. Para comemorar, a emissora está lançando a campanha 'Maná te Abençoa', que sorteará prêmios e brindes exclusivos. Os ouvintes podem se cadastrar pelo formulário de contato do site, enviando uma mensagem criativa dizendo por que a Maná FM edifica o seu dia.",
    categoria: "Entretenimento",
    imagem: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600",
    data: "03 de Junho de 2026"
  },
  {
    id: 7,
    titulo: "Corrida da Penha bate recorde histórico com mais de 6 mil atletas confirmados",
    resumo: "Competição tradicional do Espírito Santo terá percurso cênico ligando Vitória a Vila Velha pela Terceira Ponte.",
    textoCompleto: "A tradicional Corrida da Penha, maior circuito esportivo de rua do estado, superou todas as expectativas para a edição de 2026. A organização confirmou a inscrição de mais de 6 mil corredores profissionais e amadores de todas as regiões do Brasil. Com largada na capital capixaba e chegada na Prainha de Vila Velha, o percurso conta com a emocionante travessia da Terceira Ponte, oferecendo uma vista deslumbrante aos participantes. O evento movimentará a rede hoteleira e a economia local. Haverá interdições parciais de trânsito programadas no domingo pela manhã para assegurar a integridade dos corredores, com desvios devidamente sinalizados.",
    categoria: "Esporte",
    imagem: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600",
    data: "02 de Junho de 2026"
  },
  {
    id: 8,
    titulo: "Governo do ES lança programa de investimentos para modernização de rodovias estaduais",
    resumo: "O plano de R$ 40 milhões visa melhorar o tráfego e a segurança nas principais vias capixabas ligando o interior ao litoral.",
    textoCompleto: "O Governo do Estado do Espírito Santo assinou o decreto de autorização para o novo Plano Capixaba de Infraestrutura Rodoviária. Com um investimento inicial estimado em 40 milhões de reais, as obras englobam recapeamento asfáltico completo, sinalização horizontal e vertical moderna com tecnologia refletiva, ampliação de acostamentos e implantação de faixas adicionais em subidas íngremes. O governador destacou que a modernização das rodovias visa facilitar o escoamento da produção agrícola e industrial do interior capixaba e garantir mais segurança para os motoristas e turistas que trafegam rumo às praias da Grande Vitória e do litoral sul do estado.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    data: "02 de Junho de 2026"
  },
  {
    id: 9,
    titulo: "Vitória sedia congresso nacional de tecnologia e inovação no setor de porto e logística",
    resumo: "Especialistas debatem automação de terminais portuários capixabas para aumentar produtividade e sustentabilidade.",
    textoCompleto: "A capital do Espírito Santo sedia o maior congresso de tecnologia portuária do Sudeste. O evento reúne executivos de logística, engenheiros de automação e autoridades do setor para debater soluções inovadoras para os complexos portuários capixabas. O foco principal é a transição energética e o uso de inteligência artificial na triagem de cargas de contêineres e no agendamento de embarques, com potencial de reduzir as emissões de carbono e agilizar a atracação de grandes navios cargueiros. O porto de Capuaba em Vila Velha e os terminais de Tubarão em Vitória foram citados como modelos no avanço tecnológico portuário nacional.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600",
    data: "01 de Junho de 2026"
  },
  {
    id: 10,
    titulo: "Rio Branco-ES anuncia contratação de novo técnico de olho na Copa Espírito Santo",
    resumo: "Clube capixaba apresenta nova comissão técnica com meta ambiciosa de classificação para a Copa do Brasil do ano que vem.",
    textoCompleto: "A diretoria do Rio Branco-ES apresentou oficialmente seu novo comandante de futebol para o restante da temporada 2026. Com vasta experiência em divisões de acesso do futebol brasileiro, o novo treinador chega com a missão de reestruturar a equipe e integrar promessas das categorias de base. Em entrevista coletiva no CT do clube, ele destacou o potencial da torcida capa-preta e afirmou que o objetivo imediato é a conquista do título da Copa Espírito Santo, garantindo uma vaga direta na prestigiada Copa do Brasil. A preparação física do elenco começa imediatamente nesta tarde.",
    categoria: "Esporte",
    imagem: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600",
    data: "01 de Junho de 2026"
  },
  {
    id: 11,
    titulo: "Assembleia Legislativa aprova incentivos fiscais para geração de energia solar no ES",
    resumo: "Nova lei isenta impostos de equipamentos e estimula o crescimento de usinas solares fotovoltaicas no estado.",
    textoCompleto: "Em votação unânime na tarde de ontem, a Assembleia Legislativa do Espírito Santo aprovou o Projeto de Lei de Incentivo às Energias Renováveis. A medida garante isenções fiscais na aquisição de painéis solares, inversores e sistemas de armazenamento de energia para produtores rurais, pequenas empresas e residências em todo o território capixaba. Deputados autores do projeto argumentam que o estado possui alto potencial solar e que os novos incentivos criarão centenas de novos empregos no setor de instalação de energia limpa, além de reduzir as contas de energia elétrica e a pressão sobre os reservatórios hídricos locais.",
    categoria: "Local",
    imagem: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600",
    data: "31 de Maio de 2026"
  },
  {
    id: 12,
    titulo: "Orquestra Sinfônica do Espírito Santo anuncia concerto gratuito em Vitória",
    resumo: "Apresentação especial terá clássicos de Beethoven e Villa-Lobos na Catedral Metropolitana com entrada franca.",
    textoCompleto: "A Orquestra Sinfônica do Estado do Espírito Santo (OSES) anunciou sua nova temporada de concertos comunitários. A primeira apresentação será realizada na Catedral Metropolitana de Vitória, na Cidade Alta, com um repertório selecionado que une grandes nomes da música clássica europeia, como Beethoven, a composições históricas de Villa-Lobos. Sob a batuta do maestro titular, o concerto terá entrada totalmente franca, com assentos por ordem de chegada. A ação faz parte da iniciativa da Secretaria Estadual de Cultura para democratizar o acesso à arte e à música instrumental nas cidades capixabas.",
    categoria: "Entretenimento",
    imagem: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=600",
    data: "31 de Maio de 2026"
  }
];

// Inicialização do LocalStorage para notícias (PULSO_NEWS) removida - agora usa API
// Configurações de paginação para noticias.html
const ITENS_POR_PAGINA = 6;
let paginaAtual = 1;
let categoriaFiltrada = "Todas";
let buscaTexto = "";

// Array ativo de notícias que opera na renderização e paginação
let NOTICIAS_ATUAIS = [];

// Função auxiliar para mapear categorias de notícias do IBGE
function mapearCategoriaIBGE(editorias, id) {
  if (!editorias) return "Nacional";
  const edit = editorias.toLowerCase();
  
  if (edit.includes("esporte")) return "Esporte";
  if (edit.includes("social") || edit.includes("demogra") || edit.includes("censo")) return "Local";
  if (edit.includes("cultura") || edit.includes("lazer") || edit.includes("entrete") || edit.includes("cinema") || edit.includes("show")) return "Entretenimento";
  
  // Se não encontrar nenhuma correspondência óbvia, distribui com base no ID
  const resto = id % 4;
  if (resto === 0) return "Local";
  if (resto === 1) return "Nacional";
  if (resto === 2) return "Esporte";
  return "Entretenimento";
}

// Função auxiliar para formatar a data de publicação no estilo PT-BR
function formatarDataIBGE(dataStr) {
  if (!dataStr) return "Recente";
  
  try {
    // dataStr no IBGE é "dd/mm/aaaa hh:mm:ss"
    const partes = dataStr.split(" ");
    if (partes.length > 0) {
      const dataPartes = partes[0].split("/");
      if (dataPartes.length === 3) {
        const dia = dataPartes[0];
        const mesNum = parseInt(dataPartes[1], 10);
        const ano = dataPartes[2];
        
        const meses = [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
          "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        
        if (mesNum >= 1 && mesNum <= 12) {
          return `${dia} de ${meses[mesNum - 1]} de ${ano}`;
        }
      }
    }
  } catch (e) {
    console.error("Erro ao formatar data:", e);
  }
  return dataStr; // Retorna original em caso de falha
}

// Renderiza a estrutura de skeleton loaders animada
function renderizarSkeletons(container, quantidade = 6) {
  container.innerHTML = "";
  for (let i = 0; i < quantidade; i++) {
    const card = document.createElement("div");
    card.className = "skeleton-card";
    card.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-info">
        <div class="skeleton-text s-date"></div>
        <div class="skeleton-text s-title"></div>
        <div class="skeleton-text s-title-2"></div>
        <div class="skeleton-text s-desc"></div>
        <div class="skeleton-text s-desc-2"></div>
        <div class="skeleton-text s-desc-3"></div>
        <div class="skeleton-text s-btn"></div>
      </div>
    `;
    container.appendChild(card);
  }
}

// Busca notícias dinamicamente a partir da API oficial do IBGE e mescla com as locais gerenciadas pelo Admin
async function carregarNoticiasAPI() {
  const API_URL = "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=30";
  const LOCAL_API = "http://localhost:3000/api/noticias";
  
  // 1. Carregar da API local (banco de dados gerenciado pelo admin)
  let localNews = [];
  try {
    const res = await fetch(LOCAL_API);
    if (res.ok) {
      localNews = await res.json();
    }
  } catch (e) {
    console.error("Erro ao carregar notícias locais da API:", e);
  }
  
  // Formatar as notícias locais para exibição no feed / modal
  const localNewsFormatadas = localNews.map(item => {
    let textoModal = item.textoCompleto || "";
    if (!textoModal.includes("<p>")) {
      textoModal = `<p class="resumo-completo">${item.resumo || ""}</p><div class="corpo-noticia-completo">${item.textoCompleto || ""}</div>`;
    }
    return {
      id: item.id, // ID numérico vindo do admin
      titulo: item.titulo,
      resumo: item.resumo,
      textoCompleto: textoModal,
      categoria: item.categoria || "Local",
      imagem: item.imagem || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600",
      data: item.data || new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
    };
  });

  // Inicializar NOTICIAS_ATUAIS com as notícias locais gerenciáveis do Admin
  NOTICIAS_ATUAIS = [...localNewsFormatadas];

  // Timeout de 4 segundos usando Promise.race
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout na conexão")), 4000)
  );
  
  try {
    const fetchPromise = fetch(API_URL);
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    
    if (!response.ok) throw new Error(`HTTP erro! Status: ${response.status}`);
    
    const dados = await response.json();
    
    if (!dados || !dados.items || dados.items.length === 0) {
      throw new Error("Resposta da API vazia ou incorreta.");
    }
    
    // Mapear notícias da API para a nossa estrutura
    const apiNews = dados.items.map((item) => {
      // Tratar a imagem principal
      let imageUrl = "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600"; // Fallback premium
      if (item.imagens) {
        try {
          const imgObj = typeof item.imagens === 'string' ? JSON.parse(item.imagens) : item.imagens;
          if (imgObj && imgObj.image_intro) {
            imageUrl = "https://agenciadenoticias.ibge.gov.br/" + imgObj.image_intro;
          } else if (imgObj && imgObj.image_fulltext) {
            imageUrl = "https://agenciadenoticias.ibge.gov.br/" + imgObj.image_fulltext;
          }
        } catch (e) {
          console.warn(`Não foi possível carregar a imagem para notícia ID ${item.id}, usando padrão.`, e);
        }
      }
      
      const categoriaMapeada = mapearCategoriaIBGE(item.editorias, item.id);
      const dataFormatada = formatarDataIBGE(item.data_publicacao);
      
      // Estilizar o corpo do modal com uma estrutura rica e botão externo
      const textoModal = `
        <p class="resumo-completo">${item.introducao}</p>
        <div class="link-completo">
          <p>Esta notícia de relevância nacional foi fornecida em tempo real pela <strong>Agência de Notícias IBGE</strong>.</p>
          <p>Para conferir a matéria completa contendo tabelas estatísticas, infográficos adicionais e relatórios técnicos do órgão oficial, acesse o link de leitura abaixo:</p>
        </div>
        <a href="${item.link}" target="_blank" class="noticia-link-externo" aria-label="Acessar matéria original no site do IBGE">
          Ler Matéria Completa no IBGE
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      `;
      
      return {
        id: `api-${item.id}`,
        titulo: item.titulo,
        resumo: item.introducao,
        textoCompleto: textoModal,
        categoria: categoriaMapeada,
        imagem: imageUrl,
        data: dataFormatada
      };
    });
    
    // Anexar as notícias da API após as locais no feed geral
    NOTICIAS_ATUAIS = [...NOTICIAS_ATUAIS, ...apiNews];
    console.log(`[Notícias API] Mescladas ${apiNews.length} notícias externas ao banco local.`);
    
  } catch (erro) {
    console.warn("Falha ao buscar notícias online da API IBGE. Mantendo apenas base local unificada:", erro);
  }
}

// Inicialização da exibição de notícias
document.addEventListener("DOMContentLoaded", () => {
  initNoticias();
});

async function initNoticias() {
  const containerHome = document.getElementById("noticias-home-grid");
  const containerEsquerda = document.getElementById("feed-noticias-es");
  const containerDireita = document.getElementById("feed-noticias-populares");
  const containerCompleto = document.getElementById("noticias-page-grid");
  
  // Renderizar Skeletons inicialmente para um visual extremamente premium
  if (containerHome) {
    renderizarSkeletons(containerHome, 6);
  }
  if (containerEsquerda) {
    renderizarSkeletons(containerEsquerda, 4);
  }
  if (containerDireita) {
    renderizarSkeletons(containerDireita, 4);
  }
  
  if (containerCompleto) {
    renderizarSkeletons(containerCompleto, 6);
  }
  
  // Buscar notícias reais
  await carregarNoticiasAPI();
  
  if (containerHome) {
    // Renderizar apenas as 6 primeiras notícias na Home com um pequeno atraso para efeito visual suave
    setTimeout(() => {
      renderizarNoticias(NOTICIAS_ATUAIS.slice(0, 6), containerHome);
    }, 400);
  }

  if (containerEsquerda || containerDireita) {
    setTimeout(() => {
      renderizarNoticiasHome();
    }, 400);
  }
  
  if (containerCompleto) {
    // Renderizar na página de notícias completa com filtros
    setTimeout(() => {
      configurarFiltrosNoticias();
      atualizarNoticiasPagina();
    }, 400);
  }

  // Inicializar listeners do Modal global de notícias
  configurarModalNoticia();
}

// Renderiza o layout de portal (3 colunas) estilo Portal Leo Dias na Home
function renderizarNoticiasHome() {
  const containerEsquerda = document.getElementById("feed-noticias-es");
  const containerDireita = document.getElementById("feed-noticias-populares");
  const tickerContainer = document.getElementById("trend-news-ticker");
  
  // Filtrar notícias para a esquerda: Local, Geral e Políticas do ES
  const noticiasES = NOTICIAS_ATUAIS.filter(n => 
    n.categoria.toLowerCase() === "local" || n.categoria.toLowerCase() === "nacional" || n.categoria.toLowerCase() === "política"
  );
  
  // Filtrar notícias para a direita: Entretenimento, Esporte, Famosos
  const noticiasPopulares = NOTICIAS_ATUAIS.filter(n => 
    n.categoria.toLowerCase() === "entretenimento" || n.categoria.toLowerCase() === "esporte"
  );
  
  const listaEsquerda = noticiasES.length > 0 ? noticiasES.slice(0, 6) : NOTICIAS_ATUAIS.slice(0, 6);
  const listaDireita = noticiasPopulares.length > 0 ? noticiasPopulares.slice(0, 6) : NOTICIAS_ATUAIS.slice(6, 12);
  
  // Renderizar
  renderizarListaLinhas(listaEsquerda, containerEsquerda);
  renderizarListaLinhas(listaDireita, containerDireita);
  
  // Renderizar o digital ticker (letreiro de tendências)
  if (tickerContainer) {
    tickerContainer.innerHTML = "";
    const tickerList = NOTICIAS_ATUAIS.slice(0, 8);
    
    // Duplicar a lista para rolagem infinita contínua sem quebras
    const duplicateList = [...tickerList, ...tickerList];
    
    const tickerContent = duplicateList.map(n => {
      return `<a href="#" class="ticker-link" onclick="event.preventDefault(); abrirModalNoticiaPorId('${n.id}')">
                <span class="ticker-bullet">#</span>${n.titulo}
              </a>`;
    }).join("");
    
    tickerContainer.innerHTML = tickerContent;
  }
}

// Helper para abrir notícias pelo ID a partir de links externos (ex: letreiro)
function abrirModalNoticiaPorId(id) {
  const noticia = NOTICIAS_ATUAIS.find(n => String(n.id) === String(id));
  if (noticia) {
    abrirModalNoticia(noticia);
  }
}

// Renderiza notícias em formato de linhas horizontais (Leo Dias style)
function renderizarListaLinhas(lista, container) {
  if (!container) return;
  container.innerHTML = "";
  
  if (lista.length === 0) {
    container.innerHTML = `<p class="sem-noticias">Nenhuma notícia encontrada para esta seção.</p>`;
    return;
  }
  
  lista.forEach(noticia => {
    const card = document.createElement("article");
    card.className = "portal-news-row";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Notícia: ${noticia.titulo}`);
    
    const classeBadge = obterClasseBadge(noticia.categoria);
    
    card.innerHTML = `
      <div class="portal-news-thumb">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" loading="lazy">
        <span class="portal-news-badge ${classeBadge}">${noticia.categoria}</span>
      </div>
      <div class="portal-news-info">
        <span class="portal-news-date">${noticia.data}</span>
        <h4 class="portal-news-title">${noticia.titulo}</h4>
        <p class="portal-news-excerpt">${noticia.resumo}</p>
      </div>
    `;
    
    // Adicionar eventos de clique para o modal
    card.addEventListener("click", () => abrirModalNoticia(noticia));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModalNoticia(noticia);
      }
    });
    
    container.appendChild(card);
  });
}



// Renderiza a lista de notícias fornecida no container especificado
function renderizarNoticias(lista, container) {
  container.innerHTML = "";
  
  if (lista.length === 0) {
    container.innerHTML = `
      <div class="sem-noticias">
        <p>Nenhuma notícia encontrada com os filtros selecionados.</p>
      </div>
    `;
    return;
  }
  
  lista.forEach((noticia) => {
    const card = document.createElement("article");
    card.className = "noticia-card";
    card.setAttribute("data-id", noticia.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Notícia: ${noticia.titulo}. Categoria: ${noticia.categoria}`);
    
    // Mapear cores para as categorias
    const classeBadge = obterClasseBadge(noticia.categoria);
    
    card.innerHTML = `
      <div class="noticia-img-wrapper">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="noticia-img" loading="lazy">
        <span class="noticia-badge ${classeBadge}">${noticia.categoria}</span>
      </div>
      <div class="noticia-info">
        <span class="noticia-data">${noticia.data}</span>
        <h3 class="noticia-titulo">${noticia.titulo}</h3>
        <p class="noticia-resumo">${noticia.resumo}</p>
        <button class="noticia-btn-ler" aria-label="Ler mais sobre: ${noticia.titulo}">
          Ler Notícia
          <svg class="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;
    
    // Clique para expandir a notícia (Modal)
    card.addEventListener("click", () => abrirModalNoticia(noticia));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModalNoticia(noticia);
      }
    });
    
    container.appendChild(card);
  });
}

// Retorna uma classe de badge correspondente à categoria
function obterClasseBadge(categoria) {
  switch (categoria.toLowerCase()) {
    case "local": return "badge-local";
    case "nacional": return "badge-nacional";
    case "esporte": return "badge-esporte";
    case "entretenimento": return "badge-entretenimento";
    default: return "badge-padrao";
  }
}

// Configura os botões de filtro e busca na página noticias.html
function configurarFiltrosNoticias() {
  const botoesFiltro = document.querySelectorAll(".filtro-btn");
  const inputBusca = document.getElementById("busca-noticia");
  
  if (botoesFiltro) {
    botoesFiltro.forEach(botao => {
      botao.addEventListener("click", (e) => {
        botoesFiltro.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        categoriaFiltrada = e.target.getAttribute("data-categoria");
        paginaAtual = 1; // Reseta para a primeira página
        atualizarNoticiasPagina();
      });
    });
  }
  
  if (inputBusca) {
    inputBusca.addEventListener("input", (e) => {
      buscaTexto = e.target.value.toLowerCase();
      paginaAtual = 1; // Reseta para a primeira página
      atualizarNoticiasPagina();
    });
  }
}

// Filtra, pagina e renderiza as notícias de noticias.html
function atualizarNoticiasPagina() {
  const container = document.getElementById("noticias-page-grid");
  if (!container) return;
  
  // 1. Filtrar por categoria e busca
  const noticiasFiltradas = NOTICIAS_ATUAIS.filter(noticia => {
    const atendeCategoria = (categoriaFiltrada === "Todas" || noticia.categoria.toLowerCase() === categoriaFiltrada.toLowerCase());
    const atendeBusca = (noticia.titulo.toLowerCase().includes(buscaTexto) || noticia.resumo.toLowerCase().includes(buscaTexto));
    return atendeCategoria && atendeBusca;
  });
  
  // 2. Calcular paginação
  const totalItens = noticiasFiltradas.length;
  const totalPaginas = Math.ceil(totalItens / ITENS_POR_PAGINA) || 1;
  
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const noticiasExibidas = noticiasFiltradas.slice(inicio, fim);
  
  // 3. Renderizar
  renderizarNoticias(noticiasExibidas, container);
  
  // 4. Renderizar Paginação
  renderizarPaginacao(totalPaginas);
}

// Renderiza a barra de paginação estilizada
function renderizarPaginacao(totalPaginas) {
  const containerPaginacao = document.getElementById("paginacao-container");
  if (!containerPaginacao) return;
  
  containerPaginacao.innerHTML = "";
  
  if (totalPaginas <= 1) return;
  
  // Botão Anterior
  const btnAnterior = document.createElement("button");
  btnAnterior.className = `pag-btn btn-prev ${paginaAtual === 1 ? 'disabled' : ''}`;
  btnAnterior.innerHTML = "&laquo; Anterior";
  btnAnterior.setAttribute("aria-label", "Página anterior");
  if (paginaAtual > 1) {
    btnAnterior.addEventListener("click", () => {
      paginaAtual--;
      atualizarNoticiasPagina();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
  }
  containerPaginacao.appendChild(btnAnterior);
  
  // Números de páginas
  for (let i = 1; i <= totalPaginas; i++) {
    const btnNum = document.createElement("button");
    btnNum.className = `pag-btn btn-num ${paginaAtual === i ? 'active' : ''}`;
    btnNum.textContent = i;
    btnNum.setAttribute("aria-label", `Ir para página ${i}`);
    btnNum.addEventListener("click", () => {
      paginaAtual = i;
      atualizarNoticiasPagina();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
    containerPaginacao.appendChild(btnNum);
  }
  
  // Botão Próximo
  const btnProximo = document.createElement("button");
  btnProximo.className = `pag-btn btn-next ${paginaAtual === totalPaginas ? 'disabled' : ''}`;
  btnProximo.innerHTML = "Próxima &raquo;";
  btnProximo.setAttribute("aria-label", "Próxima página");
  if (paginaAtual < totalPaginas) {
    btnProximo.addEventListener("click", () => {
      paginaAtual++;
      atualizarNoticiasPagina();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
  }
  containerPaginacao.appendChild(btnProximo);
}

// Inicializa o modal de notícias
let modalFocoAnterior = null;

function configurarModalNoticia() {
  const modal = document.getElementById("noticia-modal");
  const btnFechar = document.getElementById("modal-fechar");
  
  if (!modal || !btnFechar) return;
  
  // Fechar no clique do X
  btnFechar.addEventListener("click", fecharModalNoticia);
  
  // Fechar ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModalNoticia();
    }
  });
  
  // Fechar com a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      fecharModalNoticia();
    }
  });
}

// Abre o modal com os dados da notícia correspondente
function abrirModalNoticia(noticia) {
  const modal = document.getElementById("noticia-modal");
  if (!modal) return;
  
  // Guardar elemento focado para restabelecer acessibilidade
  modalFocoAnterior = document.activeElement;
  
  document.getElementById("modal-img").src = noticia.imagem;
  document.getElementById("modal-img").alt = noticia.titulo;
  
  const badge = document.getElementById("modal-badge");
  badge.textContent = noticia.categoria;
  badge.className = `modal-badge ${obterClasseBadge(noticia.categoria)}`;
  
  document.getElementById("modal-data").textContent = noticia.data;
  document.getElementById("modal-titulo").textContent = noticia.titulo;
  document.getElementById("modal-corpo").innerHTML = noticia.textoCompleto;
  
  // Abrir com animação
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Travar scroll de fundo
  
  // Focar no botão fechar para acessibilidade
  setTimeout(() => {
    document.getElementById("modal-fechar").focus();
  }, 100);
}

// Fecha o modal
function fecharModalNoticia() {
  const modal = document.getElementById("noticia-modal");
  if (!modal) return;
  
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Liberar scroll
  
  // Devolver foco para o card de origem
  if (modalFocoAnterior) {
    modalFocoAnterior.focus();
  }
}
