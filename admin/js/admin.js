// Rádio Pulso FM - Módulo de Lógica do Painel Administrativo (admin.js)
// Arquitetura 100% Client-Side sem banco de dados (puro front-end local)

// 1. Dados Iniciais de Semente (Seed Data)
const DEFAULT_NOTICIAS = [
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
    textoCompleto: "O Convento da Penha, localizado no alto de um penhasco de 154 metros em Vila Velha, divulgou seu cronograma especial para as festividades religiosas del feriado prolongado. Além da tradicional iluminação cênica noturna, que destacará as cores do Espírito Santo, o monumento contará com missas adicionais campais no campinho do Convento para evitar aglomerações na capela principal. A prefeitura e os organizadores reforçaram que vans de transporte gratuito estarão à disposição de idosos e pessoas com deficiência na subida da ladeira. O comércio no entorno histórico da Prainha também se preparou para receber a alta demanda de turistas capixabas e de estados vizinhos.",
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

const DEFAULT_PROGRAMACAO = [
  { id: 1, titulo: "Manhã com Fé", horario: "06:00 - 09:00", locutor: "Juliana Vasconcellos", ordem: 1 },
  { id: 2, titulo: "Manhã de Sucessos", horario: "09:00 - 12:00", locutor: "Carlos Alberto", ordem: 2 },
  { id: 3, titulo: "Maná Informa", horario: "12:00 - 14:00", locutor: "Marcos Lima (Notícias)", ordem: 3 },
  { id: 4, titulo: "Conexão Cidade", horario: "14:00 - 18:00", locutor: "Rodrigo Silveira", ordem: 4 },
  { id: 5, titulo: "Esporte na Veia", horario: "18:00 - 20:00", locutor: "Fernando Costa", ordem: 5 },
  { id: 6, titulo: "Pista Mix", horario: "20:00 - 22:00", locutor: "DJ PV (Mixagens)", ordem: 6 }
];

const DEFAULT_LOCUTORES = [
  {
    id: 1,
    nome: "Juliana Vasconcellos",
    cargo: "Locutora e Jornalista",
    bio: "Comanda as manhãs trazendo informação e muita simpatia para começar o dia no ritmo certo.",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    ordem: 1,
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5527999879870"
  },
  {
    id: 2,
    nome: "Rodrigo Silveira",
    cargo: "Locutor de Entretenimento",
    bio: "Líder de audiência nas tardes capixabas, anima o trânsito com humor, curiosidades e pop de qualidade.",
    foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400",
    ordem: 2,
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5527999879870"
  },
  {
    id: 3,
    nome: "Fernando Costa",
    cargo: "Locutor de Esportes",
    bio: "Especialista no futebol e esportes locais, traz as notícias mais quentes de forma rápida e divertida.",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    ordem: 3,
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5527999879870"
  }
];

const DEFAULT_PATROCINADORES = [
  { id: 1, nome: "Supermercado Silva", logo: "", link: "https://wa.me/5527999879870", ordem: 1 },
  { id: 2, nome: "Farmácia Saúde", logo: "", link: "https://wa.me/5527999879870", ordem: 2 },
  { id: 3, nome: "Auto Posto Maná", logo: "", link: "https://wa.me/5527999879870", ordem: 3 }
];

const DEFAULT_AD_SIDEBAR = {
  titulo: "ANUNCIE AQUI",
  descricao: "Sua marca em destaque na rádio mais ouvida de Vila Velha e região. Conheça nossos planos comerciais.",
  botao: "Ver Mídia Kit",
  link: "./pages/comercial.html"
};

const DEFAULT_AD_BOTTOM = {
  tagline: "📢 SEU ANÚNCIO AQUI",
  titulo: "ANUNCIE NA EMISSORA MAIS OUVIDA",
  descricao: "Conecte sua empresa a mais de 2.6 milhões de capixabas. Spots e banners.",
  botao: "Fale com um Consultor",
  link: "./pages/comercial.html"
};

// 2. Variáveis de Estado Global
let noticias = [];
let programacao = [];
let locutores = [];
let patrocinadores = [];


// 3. Inicialização Geral e Gate de Login
document.addEventListener("DOMContentLoaded", () => {
  verificarSessao();
  configurarEventosGerais();
});

// Verifica se há sessão ativa (liberado sem login temporariamente)
function verificarSessao() {
  const loginOverlay = document.getElementById("login-overlay");
  const adminLayout = document.getElementById("admin-layout");
  
  if (loginOverlay) loginOverlay.style.display = "none";
  if (adminLayout) adminLayout.style.display = "flex";
  carregarListagemAtiva();
}

// Configurar ouvintes de cliques e logins
function configurarEventosGerais() {
  // Login
  const formLogin = document.getElementById("form-login");
  const loginErrorMsg = document.getElementById("login-error-msg");
  
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
      
      if (user === "admin" && (pass === "mana987" || pass === "pulso987")) {
        sessionStorage.setItem("admin_authenticated", "true");
        if (loginErrorMsg) loginErrorMsg.style.display = "none";
        verificarSessao();
      } else {
        if (loginErrorMsg) loginErrorMsg.style.display = "block";
      }
    });
  }

  // Logout (Redireciona para o portal principal)
  const btnLogout = document.getElementById("btn-logout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      sessionStorage.removeItem("admin_authenticated");
      const path = window.location.pathname.replace(/\\/g, '/');
      const isPage = path.includes('/pages/') || path.endsWith('/pages');
      window.location.href = isPage ? "../index.html" : "./index.html";
    });
  }

  // Toggles de Abas (Sidebar Menu)
  const menuItems = document.querySelectorAll(".menu-item");
  const adminSections = document.querySelectorAll(".admin-section");
  
  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      menuItems.forEach(m => m.classList.remove("active"));
      adminSections.forEach(s => s.classList.remove("active"));
      
      const targetSectionId = item.getAttribute("data-tab");
      item.classList.add("active");
      document.getElementById(targetSectionId).classList.add("active");
      
      // Fecha qualquer formulário aberto ao trocar de aba para evitar poluição
      fecharTodosFormularios();
      carregarListagemAtiva();
    });
  });

  // Eventos de Abertura de Formulários (Add buttons)
  document.getElementById("btn-nova-noticia").addEventListener("click", () => abrirFormulario("noticia"));
  document.getElementById("btn-novo-programa").addEventListener("click", () => abrirFormulario("programa"));
  document.getElementById("btn-novo-locutor").addEventListener("click", () => abrirFormulario("locutor"));
  document.getElementById("btn-novo-patrocinador").addEventListener("click", () => abrirFormulario("patrocinador"));

  // Eventos de Cancelamento
  document.getElementById("btn-cancela-noticia").addEventListener("click", () => fecharFormulario("noticia"));
  document.getElementById("btn-cancela-programa").addEventListener("click", () => fecharFormulario("programa"));
  document.getElementById("btn-cancela-locutor").addEventListener("click", () => fecharFormulario("locutor"));
  document.getElementById("btn-cancela-patrocinador").addEventListener("click", () => fecharFormulario("patrocinador"));

  // Submissão de Formulários CRUD
  document.getElementById("form-noticia").addEventListener("submit", salvarNoticia);
  document.getElementById("form-programa").addEventListener("submit", salvarPrograma);
  document.getElementById("form-locutor").addEventListener("submit", salvarLocutor);
  document.getElementById("form-patrocinador").addEventListener("submit", salvarPatrocinador);
  const formPublicidade = document.getElementById("form-publicidade");
  if (formPublicidade) {
    formPublicidade.addEventListener("submit", salvarPublicidade);
  }

  // Listeners de Upload de Imagem
  document.getElementById("n-foto-file").addEventListener("change", (e) => inicializarUpload(e, "noticia", "n-upload-box", "n-upload-preview"));
  document.getElementById("l-foto-file").addEventListener("change", (e) => inicializarUpload(e, "locutor", "l-upload-box", "l-upload-preview"));
  document.getElementById("pat-logo-file").addEventListener("change", (e) => inicializarUpload(e, "patrocinador", "pat-upload-box", "pat-upload-preview"));
  document.getElementById("ad-side-file").addEventListener("change", (e) => inicializarUpload(e, "adSidebar", "ad-side-upload-box", "ad-side-upload-preview"));
  document.getElementById("ad-bottom-file").addEventListener("change", (e) => inicializarUpload(e, "adBottom", "ad-bottom-upload-box", "ad-bottom-upload-preview"));

  // CNPJ mask
  const cnpjInput = document.getElementById("pat-cnpj");
  if (cnpjInput) {
    cnpjInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      v = v.substring(0, 14);
      if (v.length > 12) v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
      else if (v.length > 8) v = v.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, "$1.$2.$3/$4");
      else if (v.length > 5) v = v.replace(/(\d{2})(\d{3})(\d+)/, "$1.$2.$3");
      else if (v.length > 2) v = v.replace(/(\d{2})(\d+)/, "$1.$2");
      e.target.value = v;
    });
  }

  // Preview upload listener
  const previewFileInput = document.getElementById("preview-logo-file");
  if (previewFileInput) {
    previewFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const box = document.getElementById("preview-upload-box");
      const loading = box.querySelector(".upload-box-loading");
      const content = box.querySelector(".upload-box-content");
      if (loading) { loading.style.display = "flex"; }
      if (content) { content.style.display = "none"; }
      const reader = new FileReader();
      reader.onload = (ev) => {
        setTimeout(() => {
          document.getElementById("preview-pat-url").value = ev.target.result;
          if (loading) loading.style.display = "none";
          if (content) content.style.display = "flex";
          atualizarPreviewPatrocinador();
        }, 500);
      };
      reader.readAsDataURL(file);
    });
  }
}

// 4. Lógicas Globais de Formulário e Navegação Wizard
const TOTAL_STEPS = { noticia: 3, programa: 2, locutor: 3, patrocinador: 3 };
let activeSteps = { noticia: 1, programa: 1, locutor: 1, patrocinador: 1 };

function mostrarEtapa(tipo, step) {
  activeSteps[tipo] = step;
  
  // Atualizar panes
  const panes = document.querySelectorAll(`#form-${tipo} .form-step-pane`);
  panes.forEach(pane => {
    const paneStep = parseInt(pane.getAttribute("data-step"), 10);
    if (paneStep === step) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });

  // Atualizar indicadores
  const nodes = document.querySelectorAll(`#indicator-${tipo} .wizard-step-node`);
  nodes.forEach(node => {
    const nodeStep = parseInt(node.getAttribute("data-step"), 10);
    if (nodeStep < step) {
      node.classList.add("completed");
      node.classList.remove("active");
    } else if (nodeStep === step) {
      node.classList.add("active");
      node.classList.remove("completed");
    } else {
      node.classList.remove("active", "completed");
    }
  });

  // Atualizar linhas conectoras
  const lines = document.querySelectorAll(`#indicator-${tipo} .wizard-step-line`);
  lines.forEach((line, idx) => {
    if (step > idx + 1) {
      line.classList.add("completed");
    } else {
      line.classList.remove("completed");
    }
  });

  // Atualizar botões
  const total = TOTAL_STEPS[tipo];
  const btnPrev = document.getElementById(`btn-prev-${tipo}`);
  const btnNext = document.getElementById(`btn-next-${tipo}`);
  const btnSave = document.getElementById(`btn-save-${tipo}`);

  if (btnPrev) btnPrev.style.display = (step === 1) ? "none" : "inline-block";
  if (btnNext) btnNext.style.display = (step === total) ? "none" : "inline-block";
  if (btnSave) btnSave.style.display = (step === total) ? "inline-block" : "none";
}

function avancarEtapa(tipo) {
  const step = activeSteps[tipo];
  const pane = document.querySelector(`#form-${tipo} .form-step-pane[data-step="${step}"]`);
  if (pane) {
    const fields = pane.querySelectorAll("input, select, textarea");
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }
    }
  }
  
  const total = TOTAL_STEPS[tipo];
  if (step < total) {
    mostrarEtapa(tipo, step + 1);
  }
}

function voltarEtapa(tipo) {
  const step = activeSteps[tipo];
  if (step > 1) {
    mostrarEtapa(tipo, step - 1);
  }
}

// Expor para o escopo global (para chamadas inline onclick do HTML)
window.mostrarEtapa = mostrarEtapa;
window.avancarEtapa = avancarEtapa;
window.voltarEtapa = voltarEtapa;

// Mapa para guardar os dados de upload por tipo de formulário
const uploadedImages = { noticia: null, locutor: null, patrocinador: null, adSidebar: null, adBottom: null };

function abrirFormulario(tipo) {
  document.getElementById(`form-${tipo}-wrapper`).style.display = "flex";
  document.getElementById(`form-${tipo}`).reset();
  document.getElementById(`${tipo}-edit-id`).value = "";
  document.getElementById(`form-${tipo}-titulo`).textContent = `Cadastrar ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`;
  resetarUpload(tipo);
  mostrarEtapa(tipo, 1);
}

function fecharFormulario(tipo) {
  document.getElementById(`form-${tipo}-wrapper`).style.display = "none";
  resetarUpload(tipo);
}

function fecharTodosFormularios() {
  fecharFormulario("noticia");
  fecharFormulario("programa");
  fecharFormulario("locutor");
  fecharFormulario("patrocinador");
}

// ==========================================
// F. LÓGICA DE UPLOAD DE IMAGEM
// ==========================================

// Mapeamentos de IDs de elementos por tipo
const UPLOAD_MAP = {
  noticia:      { boxId: "n-upload-box",   previewId: "n-upload-preview",   fileId: "n-foto-file" },
  locutor:      { boxId: "l-upload-box",   previewId: "l-upload-preview",   fileId: "l-foto-file" },
  patrocinador: { boxId: "pat-upload-box", previewId: "pat-upload-preview", fileId: "pat-logo-file" },
  adSidebar:    { boxId: "ad-side-upload-box", previewId: "ad-side-upload-preview", fileId: "ad-side-file" },
  adBottom:     { boxId: "ad-bottom-upload-box", previewId: "ad-bottom-upload-preview", fileId: "ad-bottom-file" }
};

function inicializarUpload(e, tipo, boxId, previewImgId) {
  const file = e.target.files[0];
  if (!file) return;

  const box = document.getElementById(boxId);
  const loading = box.querySelector(".upload-box-loading");
  const content = box.querySelector(".upload-box-content");
  const preview = box.querySelector(".upload-box-preview");

  // Mostrar spinner
  content.style.display = "none";
  preview.style.display = "none";
  loading.style.display = "flex";

  const reader = new FileReader();

  reader.onload = (ev) => {
    const dataUrl = ev.target.result;

    // Simular pequeno delay para mostrar o loading (mínimo 600ms)
    setTimeout(() => {
      uploadedImages[tipo] = dataUrl;

      // Mostrar preview
      const img = document.getElementById(previewImgId);
      img.src = dataUrl;
      loading.style.display = "none";
      preview.style.display = "flex";

      // Limpar o campo de URL (o upload tem prioridade)
      const urlFieldMap = { noticia: "n-imagem", locutor: "l-foto", patrocinador: "pat-logo", adSidebar: "ad-side-img", adBottom: "ad-bottom-img" };
      const urlField = document.getElementById(urlFieldMap[tipo]);
      if (urlField) urlField.value = "";
    }, 700);
  };

  reader.onerror = () => {
    loading.style.display = "none";
    content.style.display = "flex";
    mostrarToastAdmin("❌ Erro ao ler o arquivo. Tente novamente.", "error");
  };

  reader.readAsDataURL(file);
}

window.removerUpload = function(tipo) {
  resetarUpload(tipo);
  // Limpar o file input também
  const fileId = UPLOAD_MAP[tipo]?.fileId;
  if (fileId) {
    const fileInput = document.getElementById(fileId);
    if (fileInput) fileInput.value = "";
  }
};

function resetarUpload(tipo) {
  uploadedImages[tipo] = null;
  const map = UPLOAD_MAP[tipo];
  if (!map) return;

  const box = document.getElementById(map.boxId);
  if (!box) return;

  const loading = box.querySelector(".upload-box-loading");
  const content = box.querySelector(".upload-box-content");
  const preview = box.querySelector(".upload-box-preview");

  if (loading) loading.style.display = "none";
  if (preview) preview.style.display = "none";
  if (content) content.style.display = "flex";
}

function mostrarPreviewUploadExistente(tipo, dataUrl) {
  const map = UPLOAD_MAP[tipo];
  if (!map || !dataUrl || !dataUrl.startsWith("data:")) return;

  uploadedImages[tipo] = dataUrl;

  const box = document.getElementById(map.boxId);
  if (!box) return;

  const loading = box.querySelector(".upload-box-loading");
  const content = box.querySelector(".upload-box-content");
  const preview = box.querySelector(".upload-box-preview");
  const img = document.getElementById(map.previewId);

  if (img) img.src = dataUrl;
  if (loading) loading.style.display = "none";
  if (content) content.style.display = "none";
  if (preview) preview.style.display = "flex";
}

const API_BASE = "http://localhost:3000/api";

async function carregarListagemAtiva() {
  const activeTabId = document.querySelector(".menu-item.active").getAttribute("data-tab");
  
  try {
    if (activeTabId === "tab-noticias") {
      const res = await fetch(`${API_BASE}/noticias`);
      noticias = await res.json();
      renderizarListaNoticias();
    }
    if (activeTabId === "tab-programacao") {
      const res = await fetch(`${API_BASE}/programacao`);
      programacao = await res.json();
      renderizarListaProgramacao();
    }
    if (activeTabId === "tab-locutores") {
      const res = await fetch(`${API_BASE}/locutores`);
      locutores = await res.json();
      renderizarListaLocutores();
    }
    if (activeTabId === "tab-patrocinadores") {
      const res = await fetch(`${API_BASE}/patrocinadores`);
      patrocinadores = await res.json();
      renderizarListaPatrocinadores();
    }
    if (activeTabId === "tab-live") inicializarTabLive();
    if (activeTabId === "tab-publicidade") inicializarTabPublicidade();
  } catch (err) {
    console.error("Erro ao carregar listagem:", err);
    mostrarToastAdmin("Erro ao conectar com a API", "error");
  }
}

// ==========================================
// A. NOTÍCIAS CRUD
// ==========================================
function renderizarListaNoticias() {
  const corpo = document.getElementById("lista-noticias-corpo");
  corpo.innerHTML = "";
  
  if (noticias.length === 0) {
    corpo.innerHTML = `<tr><td colspan="5" class="tbl-empty-msg">Nenhuma notícia cadastrada localmente no painel admin.</td></tr>`;
    return;
  }
  
  noticias.forEach(item => {
    const tr = document.createElement("tr");
    const thumb = item.imagem || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=150";
    
    tr.innerHTML = `
      <td><img src="${thumb}" class="tbl-thumb" alt="Thumb"></td>
      <td><strong>${item.titulo}</strong></td>
      <td><span class="header-badge">${item.categoria}</span></td>
      <td>${item.data}</td>
      <td class="actions-cell">
        <button class="btn-tbl-edit" onclick="editarNoticia(${item.id})">Editar</button>
        <button class="btn-tbl-delete" onclick="deletarNoticia(${item.id})">Excluir</button>
      </td>
    `;
    corpo.appendChild(tr);
  });
}

async function salvarNoticia(e) {
  e.preventDefault();
  
  const form = document.getElementById("form-noticia");
  if (!form.checkValidity()) {
    form.reportValidity();
    const invalidField = form.querySelector(":invalid");
    if (invalidField) {
      const pane = invalidField.closest(".form-step-pane");
      if (pane) {
        const step = parseInt(pane.getAttribute("data-step"), 10);
        mostrarEtapa("noticia", step);
      }
    }
    return;
  }
  
  const idEdit = document.getElementById("noticia-edit-id").value;
  const formData = new FormData();
  formData.append("titulo", document.getElementById("n-titulo").value.trim());
  formData.append("categoria", document.getElementById("n-categoria").value);
  formData.append("data", document.getElementById("n-data").value.trim());
  formData.append("resumo", document.getElementById("n-resumo").value.trim());
  formData.append("textoCompleto", document.getElementById("n-texto").value.trim());
  
  const fileInput = document.getElementById("n-foto-file");
  if (fileInput.files.length > 0) {
    formData.append("imagem", fileInput.files[0]);
  } else {
    // Se não houver arquivo novo, enviar a imagem URL atual
    formData.append("imagemUrl", document.getElementById("n-imagem").value.trim() || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600");
  }
  
  try {
    if (idEdit) {
      await fetch(`${API_BASE}/noticias/${idEdit}`, { method: "PUT", body: formData });
    } else {
      await fetch(`${API_BASE}/noticias`, { method: "POST", body: formData });
    }
    fecharFormulario("noticia");
    carregarListagemAtiva();
  } catch (error) {
    console.error("Erro ao salvar notícia:", error);
    mostrarToastAdmin("Erro ao salvar notícia", "error");
  }
}

window.editarNoticia = function(id) {
  const item = noticias.find(n => n.id === id);
  if (!item) return;
  
  abrirFormulario("noticia");
  document.getElementById("form-noticia-titulo").textContent = "Editar Notícia";
  
  document.getElementById("noticia-edit-id").value = item.id;
  document.getElementById("n-titulo").value = item.titulo;
  document.getElementById("n-categoria").value = item.categoria;
  // Se a imagem salva for Base64 (upload anterior), mostrar preview; caso contrário mostrar URL
  if (item.imagem && item.imagem.startsWith("data:")) {
    mostrarPreviewUploadExistente("noticia", item.imagem);
    document.getElementById("n-imagem").value = "";
  } else {
    document.getElementById("n-imagem").value = item.imagem === "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600" ? "" : item.imagem;
  }
  document.getElementById("n-data").value = item.data;
  document.getElementById("n-resumo").value = item.resumo;
  document.getElementById("n-texto").value = item.textoCompleto;
};

window.deletarNoticia = async function(id) {
  if (confirm("Deseja realmente excluir esta notícia?")) {
    try {
      await fetch(`${API_BASE}/noticias/${id}`, { method: "DELETE" });
      carregarListagemAtiva();
    } catch (error) {
      console.error("Erro ao deletar notícia:", error);
    }
  }
};

// ==========================================
// B. PROGRAMAÇÃO CRUD
// ==========================================
function renderizarListaProgramacao() {
  const corpo = document.getElementById("lista-programacao-corpo");
  corpo.innerHTML = "";
  
  if (programacao.length === 0) {
    corpo.innerHTML = `<tr><td colspan="5" class="tbl-empty-msg">Nenhum programa cadastrado localmente.</td></tr>`;
    return;
  }
  
  // Ordena por ordem de exibição na grade
  programacao.sort((a, b) => a.ordem - b.ordem);
  
  programacao.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${item.ordem}º</strong></td>
      <td><span class="header-badge">${item.horario}</span></td>
      <td><strong>${item.titulo}</strong></td>
      <td>${item.locutor}</td>
      <td class="actions-cell">
        <button class="btn-tbl-edit" onclick="editarPrograma(${item.id})">Editar</button>
        <button class="btn-tbl-delete" onclick="deletarPrograma(${item.id})">Excluir</button>
      </td>
    `;
    corpo.appendChild(tr);
  });
}

async function salvarPrograma(e) {
  e.preventDefault();
  
  const form = document.getElementById("form-programa");
  if (!form.checkValidity()) {
    form.reportValidity();
    const invalidField = form.querySelector(":invalid");
    if (invalidField) {
      const pane = invalidField.closest(".form-step-pane");
      if (pane) {
        const step = parseInt(pane.getAttribute("data-step"), 10);
        mostrarEtapa("programa", step);
      }
    }
    return;
  }
  
  const idEdit = document.getElementById("programa-edit-id").value;
  const formData = new FormData();
  formData.append("titulo", document.getElementById("p-titulo").value.trim());
  formData.append("horario", document.getElementById("p-horario").value.trim());
  formData.append("locutor", document.getElementById("p-locutor").value.trim());
  formData.append("ordem", document.getElementById("p-ordem").value);
  
  try {
    if (idEdit) {
      await fetch(`${API_BASE}/programacao/${idEdit}`, { method: "PUT", body: formData });
    } else {
      await fetch(`${API_BASE}/programacao`, { method: "POST", body: formData });
    }
    fecharFormulario("programa");
    carregarListagemAtiva();
  } catch (error) {
    console.error("Erro ao salvar programa:", error);
    mostrarToastAdmin("Erro ao salvar programa", "error");
  }
}

window.editarPrograma = function(id) {
  const item = programacao.find(p => p.id === id);
  if (!item) return;
  
  abrirFormulario("programa");
  document.getElementById("form-programa-titulo").textContent = "Editar Programa";
  
  document.getElementById("programa-edit-id").value = item.id;
  document.getElementById("p-titulo").value = item.titulo;
  document.getElementById("p-horario").value = item.horario;
  document.getElementById("p-locutor").value = item.locutor;
  document.getElementById("p-ordem").value = item.ordem;
};

window.deletarPrograma = async function(id) {
  if (confirm("Excluir este horário da grade?")) {
    try {
      await fetch(`${API_BASE}/programacao/${id}`, { method: "DELETE" });
      carregarListagemAtiva();
    } catch (error) {
      console.error("Erro ao deletar programa:", error);
    }
  }
};

// ==========================================
// C. LOCUTORES CRUD
// ==========================================
function renderizarListaLocutores() {
  const corpo = document.getElementById("lista-locutores-corpo");
  corpo.innerHTML = "";
  
  if (locutores.length === 0) {
    corpo.innerHTML = `<tr><td colspan="5" class="tbl-empty-msg">Nenhum locutor cadastrado localmente.</td></tr>`;
    return;
  }
  
  locutores.sort((a, b) => a.ordem - b.ordem);
  
  locutores.forEach(item => {
    const tr = document.createElement("tr");
    const thumb = item.foto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";
    
    tr.innerHTML = `
      <td><img src="${thumb}" class="tbl-thumb-circle" alt="Foto"></td>
      <td><strong>${item.nome}</strong></td>
      <td>${item.cargo}</td>
      <td>${item.ordem}º</td>
      <td class="actions-cell">
        <button class="btn-tbl-edit" onclick="editarLocutor(${item.id})">Editar</button>
        <button class="btn-tbl-delete" onclick="deletarLocutor(${item.id})">Excluir</button>
      </td>
    `;
    corpo.appendChild(tr);
  });
}

async function salvarLocutor(e) {
  e.preventDefault();
  
  const form = document.getElementById("form-locutor");
  if (!form.checkValidity()) {
    form.reportValidity();
    const invalidField = form.querySelector(":invalid");
    if (invalidField) {
      const pane = invalidField.closest(".form-step-pane");
      if (pane) {
        const step = parseInt(pane.getAttribute("data-step"), 10);
        mostrarEtapa("locutor", step);
      }
    }
    return;
  }
  
  const idEdit = document.getElementById("locutor-edit-id").value;
  const formData = new FormData();
  formData.append("nome", document.getElementById("l-nome").value.trim());
  formData.append("cargo", document.getElementById("l-cargo").value.trim());
  formData.append("ordem", document.getElementById("l-ordem").value);
  formData.append("instagram", document.getElementById("l-instagram").value.trim() || "https://instagram.com");
  formData.append("whatsapp", document.getElementById("l-whatsapp").value.trim() || "https://wa.me/5527999879870");
  formData.append("bio", document.getElementById("l-bio").value.trim());
  
  const fileInput = document.getElementById("l-foto-file");
  if (fileInput.files.length > 0) {
    formData.append("foto", fileInput.files[0]);
  } else {
    formData.append("fotoUrl", document.getElementById("l-foto").value.trim() || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400");
  }
  
  try {
    if (idEdit) {
      await fetch(`${API_BASE}/locutores/${idEdit}`, { method: "PUT", body: formData });
    } else {
      await fetch(`${API_BASE}/locutores`, { method: "POST", body: formData });
    }
    fecharFormulario("locutor");
    carregarListagemAtiva();
  } catch (error) {
    console.error("Erro ao salvar locutor:", error);
    mostrarToastAdmin("Erro ao salvar locutor", "error");
  }
}

window.editarLocutor = function(id) {
  const item = locutores.find(l => l.id === id);
  if (!item) return;
  
  abrirFormulario("locutor");
  document.getElementById("form-locutor-titulo").textContent = "Editar Locutor";
  
  document.getElementById("locutor-edit-id").value = item.id;
  document.getElementById("l-nome").value = item.nome;
  document.getElementById("l-cargo").value = item.cargo;
  // Se a foto salva for Base64 (upload anterior), mostrar preview; caso contrário mostrar URL
  if (item.foto && item.foto.startsWith("data:")) {
    mostrarPreviewUploadExistente("locutor", item.foto);
    document.getElementById("l-foto").value = "";
  } else {
    document.getElementById("l-foto").value = (item.foto.includes("photo-1534528741775")) ? "" : item.foto;
  }
  document.getElementById("l-ordem").value = item.ordem;
  document.getElementById("l-instagram").value = item.instagram === "https://instagram.com" ? "" : item.instagram;
  document.getElementById("l-whatsapp").value = item.whatsapp === "https://wa.me/5527999879870" ? "" : item.whatsapp;
  document.getElementById("l-bio").value = item.bio;
};

window.deletarLocutor = async function(id) {
  if (confirm("Remover este locutor da equipe?")) {
    try {
      await fetch(`${API_BASE}/locutores/${id}`, { method: "DELETE" });
      carregarListagemAtiva();
    } catch (error) {
      console.error("Erro ao deletar locutor:", error);
    }
  }
};

// ==========================================
// D. PATROCINADORES CRUD
// ==========================================
function renderizarListaPatrocinadores() {
  const corpo = document.getElementById("lista-patrocinadores-corpo");
  corpo.innerHTML = "";
  
  if (patrocinadores.length === 0) {
    corpo.innerHTML = `<tr><td colspan="9" class="tbl-empty-msg">Nenhum parceiro ou patrocinador cadastrado.</td></tr>`;
    return;
  }
  
  patrocinadores.sort((a, b) => a.ordem - b.ordem);
  
  patrocinadores.forEach(item => {
    const tr = document.createElement("tr");
    const path = window.location.pathname.replace(/\\/g, '/');
    const isPage = path.includes('/pages/') || path.endsWith('/pages');
    const logoImg = item.logo || (isPage ? "../assets/icons/icon-192x192.png" : "./assets/icons/icon-192x192.png");
    const status = item.status || "ativo";
    const renovacao = item.renovacao || "mensal";
    const valor = item.valorPago ? `R$ ${parseFloat(item.valorPago).toFixed(2).replace(".", ",")}` : "—";
    const diaPgto = item.diaPagamento ? `Dia ${item.diaPagamento}` : "—";
    const statusDot = status === "ativo" ? "●" : "●";
    
    if (status === "inativo") tr.classList.add("tbl-row-inativo");
    
    tr.innerHTML = `
      <td><img src="${logoImg}" class="tbl-thumb-circle" alt="Logo" style="background-color:#eee; padding:2px;"></td>
      <td><strong>${item.nome}</strong></td>
      <td><span class="badge-status ${status}">${statusDot} ${status === "ativo" ? "Ativo" : "Desativado"}</span></td>
      <td><span class="badge-renovacao">${renovacao}</span></td>
      <td style="font-size: 0.82rem; color: #94a3b8;">${diaPgto}</td>
      <td style="font-size: 0.82rem; color: #94a3b8;">${valor}</td>
      <td><a href="${item.link}" target="_blank" style="color:var(--color-gold); font-weight:500;">Link ↗</a></td>
      <td>${item.ordem}º</td>
      <td class="actions-cell">
        <button class="btn-tbl-edit" onclick="editarPatrocinador(${item.id})">Editar</button>
        <button class="btn-tbl-delete" onclick="deletarPatrocinador(${item.id})">Excluir</button>
      </td>
    `;
    corpo.appendChild(tr);
  });
}

async function salvarPatrocinador(e) {
  e.preventDefault();
  
  const form = document.getElementById("form-patrocinador");
  if (!form.checkValidity()) {
    form.reportValidity();
    const invalidField = form.querySelector(":invalid");
    if (invalidField) {
      const pane = invalidField.closest(".form-step-pane");
      if (pane) {
        const step = parseInt(pane.getAttribute("data-step"), 10);
        mostrarEtapa("patrocinador", step);
      }
    }
    return;
  }
  
  const idEdit = document.getElementById("patrocinador-edit-id").value;
  const formData = new FormData();
  formData.append("nome", document.getElementById("pat-nome").value.trim());
  formData.append("ordem", document.getElementById("pat-ordem").value);
  formData.append("cnpj", document.getElementById("pat-cnpj").value.trim());
  formData.append("diaPagamento", document.getElementById("pat-dia-pgto").value);
  formData.append("renovacao", document.getElementById("pat-renovacao").value);
  formData.append("valorPago", document.getElementById("pat-valor").value || "0");
  formData.append("status", document.querySelector('input[name="pat-status"]:checked')?.value || "ativo");
  formData.append("link", document.getElementById("pat-link").value.trim() || "https://wa.me/5527999879870");
  
  const fileInput = document.getElementById("pat-logo-file");
  if (fileInput.files.length > 0) {
    formData.append("logo", fileInput.files[0]);
  } else {
    formData.append("logoUrl", document.getElementById("pat-logo").value.trim());
  }
  
  try {
    if (idEdit) {
      await fetch(`${API_BASE}/patrocinadores/${idEdit}`, { method: "PUT", body: formData });
    } else {
      await fetch(`${API_BASE}/patrocinadores`, { method: "POST", body: formData });
    }
    fecharFormulario("patrocinador");
    carregarListagemAtiva();
    mostrarToastAdmin(`✅ Patrocinador "${formData.get("nome")}" salvo com sucesso!`, "success");
  } catch (error) {
    console.error("Erro ao salvar patrocinador:", error);
    mostrarToastAdmin("Erro ao salvar patrocinador", "error");
  }
}

window.editarPatrocinador = function(id) {
  const item = patrocinadores.find(p => p.id === id);
  if (!item) return;
  
  abrirFormulario("patrocinador");
  document.getElementById("form-patrocinador-titulo").textContent = "Editar Patrocinador";
  
  // Etapa 1
  document.getElementById("patrocinador-edit-id").value = item.id;
  document.getElementById("pat-nome").value = item.nome;
  document.getElementById("pat-ordem").value = item.ordem;
  
  // Etapa 2 — Ficha Comercial
  document.getElementById("pat-cnpj").value = item.cnpj || "";
  document.getElementById("pat-dia-pgto").value = item.diaPagamento || "";
  document.getElementById("pat-renovacao").value = item.renovacao || "mensal";
  document.getElementById("pat-valor").value = item.valorPago || "";
  const statusAtual = item.status || "ativo";
  const radioStatus = document.getElementById(`pat-status-${statusAtual}`);
  if (radioStatus) radioStatus.checked = true;
  
  // Etapa 3 — Logo & Link
  if (item.logo && item.logo.startsWith("data:")) {
    mostrarPreviewUploadExistente("patrocinador", item.logo);
    document.getElementById("pat-logo").value = "";
  } else {
    document.getElementById("pat-logo").value = item.logo || "";
  }
  document.getElementById("pat-link").value = item.link === "https://wa.me/5527999879870" ? "" : item.link;
};

window.deletarPatrocinador = async function(id) {
  if (confirm("Remover este patrocinador?")) {
    try {
      await fetch(`${API_BASE}/patrocinadores/${id}`, { method: "DELETE" });
      carregarListagemAtiva();
    } catch (error) {
      console.error("Erro ao deletar patrocinador:", error);
    }
  }
};

// ==========================================
// E. LIVE STREAM — Gerenciar Link da Live
// ==========================================

// ==========================================
// PREVIEW STANDALONE DO CARD DE ANÚNCIO
// ==========================================
window.atualizarPreviewPatrocinador = function() {
  const url = document.getElementById("preview-pat-url")?.value.trim();
  const wrapper = document.getElementById("preview-logo-wrapper");
  const placeholder = document.getElementById("preview-placeholder-text");
  if (!wrapper) return;

  // Limpar conteúdo anterior
  wrapper.innerHTML = "";

  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Preview Logo";
    img.style.maxWidth = "80%";
    img.style.maxHeight = "80%";
    img.style.objectFit = "contain";
    img.onerror = () => {
      wrapper.innerHTML = `<span class="patrocinador-placeholder-logo" style="color:#ef4444;">Erro ao carregar imagem</span>`;
      mostrarToastAdmin("❌ Não foi possível carregar essa imagem. Verifique a URL.", "error");
    };
    img.onload = () => {
      mostrarToastAdmin("✅ Preview atualizado!", "success");
    };
    wrapper.appendChild(img);
  } else {
    wrapper.innerHTML = `<span class="patrocinador-placeholder-logo">Logo aqui</span>`;
    mostrarToastAdmin("⚠️ Informe uma URL ou faça upload de uma imagem.", "warning");
  }
};

const LIVE_URL_KEY = "PULSO_LIVE_URL";

/**
 * Converte QUALQUER formato de URL do YouTube para o formato /embed/ correto.
 * Suporta:
 *   - https://www.youtube.com/watch?v=VIDEO_ID
 *   - https://www.youtube.com/live/VIDEO_ID
 *   - https://youtu.be/VIDEO_ID
 *   - https://www.youtube.com/shorts/VIDEO_ID
 *   - https://www.youtube.com/embed/VIDEO_ID  (já correto, retorna sem alteração)
 * Retorna null se não conseguir extrair o ID.
 */
function converterParaEmbedYouTube(rawUrl) {
  if (!rawUrl) return null;
  const url = rawUrl.trim();

  let videoId = null;

  // Já é embed (youtube.com ou youtube-nocookie.com) — extrai só o ID
  const embedMatch = url.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) videoId = embedMatch[1];

  // Formato: /live/VIDEO_ID
  if (!videoId) {
    const liveMatch = url.match(/youtube\.com\/live\/([a-zA-Z0-9_-]{11})/);
    if (liveMatch) videoId = liveMatch[1];
  }

  // Formato: /watch?v=VIDEO_ID
  if (!videoId) {
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) videoId = watchMatch[1];
  }

  // Formato: youtu.be/VIDEO_ID
  if (!videoId) {
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) videoId = shortMatch[1];
  }

  // Formato: /shorts/VIDEO_ID
  if (!videoId) {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) videoId = shortsMatch[1];
  }

  if (!videoId) return null;
  // Usa youtube-nocookie.com — tem menos restrições de embedding
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

function mostrarToastAdmin(mensagem, tipo = "info") {
  // Remove toast anterior se existir
  const existing = document.getElementById("admin-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "admin-toast";
  const cor = tipo === "success" ? "#25d366" : tipo === "error" ? "#cf0000" : "#f59e0b";
  toast.style.cssText = `
    position: fixed; bottom: 30px; right: 30px; z-index: 9999;
    background: #1e293b; color: #fff; border-left: 4px solid ${cor};
    padding: 14px 20px; border-radius: 10px; font-size: 0.88rem;
    font-weight: 600; max-width: 360px; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    animation: slideInToast 0.3s ease;
  `;
  toast.innerHTML = `<style>@keyframes slideInToast{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}</style>${mensagem}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function inicializarTabLive() {
  const savedUrl = localStorage.getItem(LIVE_URL_KEY) || "";
  const inputEl = document.getElementById("live-url-input");
  const linkTextEl = document.getElementById("live-current-link-text");
  const statusBadge = document.getElementById("live-current-status");

  // Preenche o input com a URL embed salva (se houver)
  if (inputEl && savedUrl) {
    inputEl.value = savedUrl;
  }

  // Exibe o link atual publicado
  if (linkTextEl) {
    linkTextEl.textContent = savedUrl || "Nenhum link configurado.";
  }

  // Atualiza o badge de status
  if (statusBadge) {
    if (savedUrl) {
      statusBadge.textContent = "✓ Live Ativa";
      statusBadge.style.background = "rgba(37, 211, 102, 0.15)";
      statusBadge.style.color = "#25d366";
      statusBadge.style.border = "1px solid rgba(37, 211, 102, 0.3)";
    } else {
      statusBadge.textContent = "Sem Transmissão";
      statusBadge.style.background = "rgba(148, 163, 184, 0.1)";
      statusBadge.style.color = "#94a3b8";
      statusBadge.style.border = "1px solid rgba(148, 163, 184, 0.2)";
    }
  }

  // Botão Pré-visualizar
  const btnPreview = document.getElementById("btn-live-preview");
  if (btnPreview && !btnPreview._listenerAttached) {
    btnPreview._listenerAttached = true;
    btnPreview.addEventListener("click", () => {
      const rawUrl = (document.getElementById("live-url-input").value || "").trim();
      if (!rawUrl) {
        mostrarToastAdmin("⚠️ Cole o link do YouTube antes de pré-visualizar.", "error");
        return;
      }

      const embedUrl = converterParaEmbedYouTube(rawUrl);
      if (!embedUrl) {
        mostrarToastAdmin("❌ Não foi possível reconhecer o link do YouTube. Use um link de vídeo ou live válido.", "error");
        return;
      }

      // Atualiza o input para mostrar o URL convertido
      const inputField = document.getElementById("live-url-input");
      if (rawUrl.replace("youtube.com", "youtube-nocookie.com").split("?")[0] !== embedUrl) {
        inputField.value = embedUrl;
        mostrarToastAdmin("🔄 Link convertido automaticamente para o formato de incorporação!", "success");
      }

      // Adiciona parâmetros para a preview
      const previewUrl = embedUrl + "?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1";

      const previewIframe = document.getElementById("live-preview-iframe");
      const placeholder = document.getElementById("live-preview-placeholder");
      const meta = document.getElementById("live-preview-meta");
      const warningEl = document.getElementById("live-embed-warning");

      // Remove aviso anterior
      if (warningEl) warningEl.remove();

      previewIframe.src = previewUrl;
      placeholder.style.display = "none";
      previewIframe.style.display = "block";
      if (meta) meta.style.display = "flex";

      // Detecta se o vídeo carregou ou foi bloqueado
      previewIframe.onload = () => {
        // Tenta verificar se o iframe carregou conteúdo real
        // (só funciona em same-origin, mas ao menos confirmamos que o load disparou)
        mostrarToastAdmin("▶ Preview carregada! Se aparecer tela preta ou erro, o canal pode ter o embed desativado.", "info");
      };
    });
  }

  // Botão Publicar
  const btnPublish = document.getElementById("btn-live-publish");
  if (btnPublish && !btnPublish._listenerAttached) {
    btnPublish._listenerAttached = true;
    btnPublish.addEventListener("click", () => {
      const rawUrl = (document.getElementById("live-url-input").value || "").trim();
      if (!rawUrl) {
        mostrarToastAdmin("⚠️ Cole o link do YouTube antes de publicar.", "error");
        return;
      }

      const embedUrl = converterParaEmbedYouTube(rawUrl);
      if (!embedUrl) {
        mostrarToastAdmin("❌ Link inválido. Verifique o URL do YouTube e tente novamente.", "error");
        return;
      }

      localStorage.setItem(LIVE_URL_KEY, embedUrl);
      document.getElementById("live-url-input").value = embedUrl;
      inicializarTabLive(); // Atualiza o status
      mostrarToastAdmin("✅ Transmissão publicada! A live já está visível no site principal.", "success");
    });
  }

  // Botão Remover Transmissão
  const btnClear = document.getElementById("btn-live-clear");
  if (btnClear && !btnClear._listenerAttached) {
    btnClear._listenerAttached = true;
    btnClear.addEventListener("click", () => {
      if (confirm("Deseja remover a transmissão ao vivo do site? O embed será ocultado no portal.")) {
        localStorage.removeItem(LIVE_URL_KEY);
        const inputEl2 = document.getElementById("live-url-input");
        const previewIframe = document.getElementById("live-preview-iframe");
        const placeholder = document.getElementById("live-preview-placeholder");
        const meta = document.getElementById("live-preview-meta");

        if (inputEl2) inputEl2.value = "";
        if (previewIframe) { previewIframe.src = ""; previewIframe.style.display = "none"; }
        if (placeholder) placeholder.style.display = "flex";
        if (meta) meta.style.display = "none";

        inicializarTabLive(); // Atualiza o status
        mostrarToastAdmin("🔴 Transmissão removida do site.", "info");
      }
    });
  }
}

// ==========================================
// F. GERENCIAMENTO DE PUBLICIDADE (BANNERS)
// ==========================================
async function inicializarTabPublicidade() {
  resetarUpload("adSidebar");
  resetarUpload("adBottom");
  // Limpar inputs de arquivo
  const sideFile = document.getElementById("ad-side-file");
  if (sideFile) sideFile.value = "";
  const bottomFile = document.getElementById("ad-bottom-file");
  if (bottomFile) bottomFile.value = "";

  try {
    const res = await fetch(`${API_BASE}/configuracoes`);
    if (!res.ok) throw new Error("Erro ao buscar configurações.");
    const config = await res.json();

    const dataSidebar = config["PULSO_AD_SIDEBAR"];
    if (dataSidebar) {
      document.getElementById("ad-side-title").value = dataSidebar.titulo || "";
      document.getElementById("ad-side-desc").value = dataSidebar.descricao || "";
      document.getElementById("ad-side-btn").value = dataSidebar.botao || "";
      document.getElementById("ad-side-link").value = dataSidebar.link || "";
      if (dataSidebar.imagem && dataSidebar.imagem.startsWith("data:")) {
        mostrarPreviewUploadExistente("adSidebar", dataSidebar.imagem);
        document.getElementById("ad-side-img").value = "";
      } else {
        document.getElementById("ad-side-img").value = dataSidebar.imagem || "";
      }
    }

    const dataBottom = config["PULSO_AD_BOTTOM"];
    if (dataBottom) {
      document.getElementById("ad-bottom-title").value = dataBottom.titulo || "";
      document.getElementById("ad-bottom-tagline").value = dataBottom.tagline || "";
      document.getElementById("ad-bottom-desc").value = dataBottom.descricao || "";
      document.getElementById("ad-bottom-btn").value = dataBottom.botao || "";
      document.getElementById("ad-bottom-link").value = dataBottom.link || "";
      if (dataBottom.imagem && dataBottom.imagem.startsWith("data:")) {
        mostrarPreviewUploadExistente("adBottom", dataBottom.imagem);
        document.getElementById("ad-bottom-img").value = "";
      } else {
        document.getElementById("ad-bottom-img").value = dataBottom.imagem || "";
      }
    }
  } catch (err) {
    console.error("Erro ao carregar publicidade da API:", err);
  }
}

async function salvarPublicidade(e) {
  e.preventDefault();

  const form = document.getElementById("form-publicidade");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const sideTitleVal = document.getElementById("ad-side-title").value.trim();
  const sideDescVal = document.getElementById("ad-side-desc").value.trim();
  const sideBtnVal = document.getElementById("ad-side-btn").value.trim();
  const sideLinkVal = document.getElementById("ad-side-link").value.trim();
  const sideImgVal = document.getElementById("ad-side-img").value.trim();

  const bottomTitleVal = document.getElementById("ad-bottom-title").value.trim();
  const bottomTaglineVal = document.getElementById("ad-bottom-tagline").value.trim();
  const bottomDescVal = document.getElementById("ad-bottom-desc").value.trim();
  const bottomBtnVal = document.getElementById("ad-bottom-btn").value.trim();
  const bottomLinkVal = document.getElementById("ad-bottom-link").value.trim();
  const bottomImgVal = document.getElementById("ad-bottom-img").value.trim();

  const adSidebarObj = {
    titulo: sideTitleVal,
    descricao: sideDescVal,
    botao: sideBtnVal,
    link: sideLinkVal,
    imagem: sideImgVal
  };

  const adBottomObj = {
    titulo: bottomTitleVal,
    tagline: bottomTaglineVal,
    descricao: bottomDescVal,
    botao: bottomBtnVal,
    link: bottomLinkVal,
    imagem: bottomImgVal
  };

  const formDataSide = new FormData();
  formDataSide.append("chave", "PULSO_AD_SIDEBAR");
  formDataSide.append("valor", JSON.stringify(adSidebarObj));
  const sideFileInput = document.getElementById("ad-side-file");
  if (sideFileInput && sideFileInput.files.length > 0) {
    formDataSide.append("adSidebarImg", sideFileInput.files[0]);
  }

  const formDataBottom = new FormData();
  formDataBottom.append("chave", "PULSO_AD_BOTTOM");
  formDataBottom.append("valor", JSON.stringify(adBottomObj));
  const bottomFileInput = document.getElementById("ad-bottom-file");
  if (bottomFileInput && bottomFileInput.files.length > 0) {
    formDataBottom.append("adBottomImg", bottomFileInput.files[0]);
  }

  try {
    const resSide = await fetch(`${API_BASE}/configuracoes`, { method: "POST", body: formDataSide });
    const resBottom = await fetch(`${API_BASE}/configuracoes`, { method: "POST", body: formDataBottom });
    
    if (!resSide.ok || !resBottom.ok) {
      throw new Error("Erro ao salvar dados no backend.");
    }

    // Also update localStorage as local mirror
    localStorage.setItem("PULSO_AD_SIDEBAR", JSON.stringify(adSidebarObj));
    localStorage.setItem("PULSO_AD_BOTTOM", JSON.stringify(adBottomObj));

    mostrarToastAdmin("✅ Alterações de publicidade salvas com sucesso!", "success");
    inicializarTabPublicidade();
  } catch (error) {
    console.error("Erro ao salvar publicidade:", error);
    mostrarToastAdmin("Erro ao salvar publicidade no servidor", "error");
  }
}
