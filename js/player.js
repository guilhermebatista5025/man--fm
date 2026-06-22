// Rádio Pulso FM - Controle de Áudio e Player Principal
const STREAM_URL = "https://uk17freenew.listen2myradio.com/live.mp3?typeportmount=s1_39982_stream_518829234";
const RADIO_NAME = "Rádio Maná FM";

// Elementos do DOM
let audioPlayer;
let btnPlayPause;
let btnPlayPauseHero;
let btnMute;
let volumeSlider;
let equalizerBars;
let badgeNoAr;
let txtMusicaAtual;
let txtArtistaAtual;
let indicatorAoVivo;
let playerVinyl;

// Novos Elementos do Rodapé Sticky
let stickyPlayerBar;
let btnStickyPlayPause;
let btnStickyMute;
let stickyVolumeSlider;
let txtStickyMusica;
let txtStickyArtista;
let stickyVinylDisc;
let btnStickyClose;

// Array de músicas simuladas para simular metadados dinâmicos (RDS)
const MOCK_PLAYLIST = [
  { musica: "A Casa É Sua", artista: "Casa Worship" },
  { musica: "Todavia Me Alegrarei", artista: "Samuel Messias" },
  { musica: "Espaço Comercial", artista: "Rádio Maná FM" },
  { musica: "Lugar Secreto", artista: "Gabriela Rocha" },
  { musica: "Grandes Coisas", artista: "Fernandinho" },
  { musica: "Intervalo Comercial", artista: "Momento de Ofertas" },
  { musica: "Raridade", artista: "Anderson Freire" },
  { musica: "Caminho no Deserto", artista: "Soraya Moraes" },
  { musica: "Bondade de Deus", artista: "Isaías Saad" },
  { musica: "Identificador de Emissora", artista: "Maná FM - Sua Rádio Cristã" },
  { musica: "Alívio", artista: "Jessé Aguiar" }
];

let playlistIndex = 0;
let metadataInterval;
let retryCount = 0;
const MAX_RETRIES = 3;
let isReconnecting = false;

// Inicialização do Player
document.addEventListener("DOMContentLoaded", () => {
  initPlayer();
});

function initPlayer() {
  // Criar elemento de áudio dinamicamente se necessário, ou pegar do HTML
  audioPlayer = document.getElementById("audio-player");
  if (!audioPlayer) {
    audioPlayer = document.createElement("audio");
    audioPlayer.id = "audio-player";
    document.body.appendChild(audioPlayer);
  }

  // Configurar a URL de stream
  audioPlayer.src = STREAM_URL;

  // Pegar referências aos elementos do DOM do Player Principal
  btnPlayPause = document.getElementById("btn-play-pause");
  btnPlayPauseHero = document.getElementById("btn-play-hero");
  btnMute = document.getElementById("btn-mute");
  volumeSlider = document.getElementById("volume-slider");
  equalizerBars = document.querySelectorAll(".equalizer-bar");
  badgeNoAr = document.getElementById("badge-no-ar");
  txtMusicaAtual = document.getElementById("musica-atual");
  txtArtistaAtual = document.getElementById("artista-atual");
  indicatorAoVivo = document.getElementById("indicator-ao-vivo");
  playerVinyl = document.querySelector(".player-vinyl");

  // Pegar referências aos elementos do Rodapé Sticky
  stickyPlayerBar = document.getElementById("sticky-player");
  btnStickyPlayPause = document.getElementById("btn-sticky-play-pause");
  btnStickyMute = document.getElementById("btn-sticky-mute");
  stickyVolumeSlider = document.getElementById("sticky-volume-slider");
  txtStickyMusica = document.getElementById("sticky-musica");
  txtStickyArtista = document.getElementById("sticky-artista");
  stickyVinylDisc = document.querySelector(".sticky-vinyl-disc");

  // Event Listeners Principal
  if (btnPlayPause) btnPlayPause.addEventListener("click", togglePlay);
  if (btnPlayPauseHero) btnPlayPauseHero.addEventListener("click", togglePlay);
  if (btnMute) btnMute.addEventListener("click", toggleMute);
  if (volumeSlider) {
    volumeSlider.addEventListener("input", handleVolumeChange);
    audioPlayer.volume = volumeSlider.value;
  }

  // Event Listeners do Rodapé Sticky
  if (btnStickyPlayPause) btnStickyPlayPause.addEventListener("click", togglePlay);
  if (btnStickyMute) btnStickyMute.addEventListener("click", toggleStickyMute);
  if (stickyVolumeSlider) {
    stickyVolumeSlider.addEventListener("input", handleStickyVolumeChange);
    stickyVolumeSlider.value = audioPlayer.volume;
  }
  btnStickyClose = document.getElementById("btn-sticky-close");
  if (btnStickyClose) btnStickyClose.addEventListener("click", closeStickyPlayer);

  // Listener para erros de áudio (reconectar stream de forma robusta)
  audioPlayer.addEventListener("error", (e) => {
    console.error("Erro detectado no player de áudio:", audioPlayer.error);
    
    // Parar animações visuais imediatamente para refletir o erro
    setPlayingState(false);
    
    if (isReconnecting) return; // Evita empilhar reconexões simultâneas

    if (retryCount < MAX_RETRIES) {
      retryCount++;
      isReconnecting = true;
      console.warn(`[Player] Conexão perdida. Tentando reconectar (${retryCount}/${MAX_RETRIES}) em 3 segundos...`);
      
      setTimeout(() => {
        isReconnecting = false;
        audioPlayer.src = STREAM_URL;
        audioPlayer.load();
        audioPlayer.play()
          .then(() => {
            console.log("[Player] Reconectado com sucesso!");
            retryCount = 0; // Reseta as tentativas ao conectar
          })
          .catch(err => console.log("[Player] Nova tentativa falhou. Aguardando próximo ciclo."));
      }, 3000);
    } else {
      console.error("[Player] Limite de tentativas atingido. Transmissão offline.");
      alert("A transmissão está temporariamente indisponível no seu navegador ou sua conexão foi interrompida. Por favor, tente novamente clicando em Play.");
      retryCount = 0; // Reseta para permitir que o usuário tente novamente manualmente
    }
  });

  // Inicializar primeira música nos metadados
  updateMetadata();
  // Rotacionar metadados a cada 20 segundos
  startMetadataSimulation();
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play()
      .then(() => {
        setPlayingState(true);
      })
      .catch(err => {
        console.error("Erro ao reproduzir áudio: ", err);
        alert("Não foi possível carregar a transmissão no momento. Verifique sua conexão.");
      });
  } else {
    audioPlayer.pause();
    setPlayingState(false);
  }
}

// Atualizar o estado visual do player
function setPlayingState(isPlaying) {
  const playIcons = document.querySelectorAll(".play-icon-svg");
  const pauseIcons = document.querySelectorAll(".pause-icon-svg");
  
  if (isPlaying) {
    // Mostrar ícone de pause, esconder de play
    playIcons.forEach(icon => icon.style.display = "none");
    pauseIcons.forEach(icon => icon.style.display = "block");
    
    // Iniciar animação do Equalizer
    equalizerBars.forEach(bar => bar.classList.add("animating"));
    
    // Badge "NO AR" pulsante ativo
    if (badgeNoAr) badgeNoAr.classList.add("active");
    if (indicatorAoVivo) indicatorAoVivo.classList.add("active");
    if (playerVinyl) playerVinyl.classList.add("playing");
    if (stickyPlayerBar) {
      stickyPlayerBar.classList.add("playing");
      stickyPlayerBar.classList.add("visible");
    }
  } else {
    // Mostrar ícone de play, esconder de pause
    playIcons.forEach(icon => icon.style.display = "block");
    pauseIcons.forEach(icon => icon.style.display = "none");
    
    // Parar animação do Equalizer
    equalizerBars.forEach(bar => bar.classList.remove("animating"));
    
    // Desativar badge "NO AR" pulsante
    if (badgeNoAr) badgeNoAr.classList.remove("active");
    if (indicatorAoVivo) indicatorAoVivo.classList.remove("active");
    if (playerVinyl) playerVinyl.classList.remove("playing");
    if (stickyPlayerBar) stickyPlayerBar.classList.remove("playing");
  }
}

// Alternar Mudo (Mute) pelo Botão Principal
function toggleMute() {
  const isMuted = !audioPlayer.muted;
  audioPlayer.muted = isMuted;
  updateMuteState(isMuted);
}

// Alternar Mudo pelo Botão do Rodapé
function toggleStickyMute() {
  const isMuted = !audioPlayer.muted;
  audioPlayer.muted = isMuted;
  updateMuteState(isMuted);
}

// Centralizar atualização visual de Mute/Mudo
function updateMuteState(isMuted) {
  if (isMuted) {
    if (btnMute) btnMute.classList.add("muted");
    if (btnStickyMute) btnStickyMute.classList.add("muted");
    updateMuteIcon(true);
    if (volumeSlider) volumeSlider.value = 0;
    if (stickyVolumeSlider) stickyVolumeSlider.value = 0;
  } else {
    if (btnMute) btnMute.classList.remove("muted");
    if (btnStickyMute) btnStickyMute.classList.remove("muted");
    updateMuteIcon(false);
    if (volumeSlider) volumeSlider.value = audioPlayer.volume || 0.8;
    if (stickyVolumeSlider) stickyVolumeSlider.value = audioPlayer.volume || 0.8;
  }
}

// Atualizar ícones de volume/mudo nos dois players
function updateMuteIcon(isMuted) {
  const volumeHighIcon = document.getElementById("volume-high-svg");
  const volumeMutedIcon = document.getElementById("volume-muted-svg");
  const stickyHighIcon = document.getElementById("sticky-volume-high-svg");
  const stickyMutedIcon = document.getElementById("sticky-volume-muted-svg");
  
  if (isMuted) {
    if (volumeHighIcon) volumeHighIcon.style.display = "none";
    if (volumeMutedIcon) volumeMutedIcon.style.display = "block";
    if (stickyHighIcon) stickyHighIcon.style.display = "none";
    if (stickyMutedIcon) stickyMutedIcon.style.display = "block";
  } else {
    if (volumeHighIcon) volumeHighIcon.style.display = "block";
    if (volumeMutedIcon) volumeMutedIcon.style.display = "none";
    if (stickyHighIcon) stickyHighIcon.style.display = "block";
    if (stickyMutedIcon) stickyMutedIcon.style.display = "none";
  }
}

// Controlar Volume pelo Slider Principal
function handleVolumeChange(e) {
  const value = e.target.value;
  audioPlayer.volume = value;
  if (stickyVolumeSlider) stickyVolumeSlider.value = value;
  updateMuteState(value == 0);
}

// Controlar Volume pelo Slider do Rodapé
function handleStickyVolumeChange(e) {
  const value = e.target.value;
  audioPlayer.volume = value;
  if (volumeSlider) volumeSlider.value = value;
  updateMuteState(value == 0);
}

// Busca metadados reais da transmissão (via endpoint proxy do Express ou direto se local)
async function buscarMetadadosReais() {
  const SECURE_STATS_URL = window.location.protocol === 'file:'
    ? null
    : "/api/stats";
  
  if (!SECURE_STATS_URL) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // Timeout de 2.5s
    
    const response = await fetch(SECURE_STATS_URL, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error("HTTP erro");
    
    return await response.json(); // Retorna { musica, artista }
  } catch (err) {
    console.warn("[RDS] Não foi possível obter metadados ao vivo do proxy.");
  }
  return null;
}

// Busca capa do álbum / arte da música usando a API pública e gratuita do iTunes (CORS habilitado por padrão)
async function buscarCapaAlbum(artista, musica) {
  const query = encodeURIComponent(`${artista} ${musica}`);
  const url = `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // Timeout de 2s
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const artworkUrl = data.results[0].artworkUrl100;
        // Converte o tamanho da capa de 100x100 para 400x400 para excelente definição nos vinis
        return artworkUrl.replace("100x100bb.jpg", "400x400bb.jpg");
      }
    }
  } catch (e) {
    console.warn("[RDS Artwork] Erro ao buscar capa do álbum no iTunes Search API:", e);
  }
  return null;
}

// Verifica se os metadados ativos indicam um bloco comercial, propaganda ou vinheta
function verificarPropaganda(artista, musica) {
  const art = artista.toLowerCase();
  const mus = musica.toLowerCase();
  
  const termos = [
    "propaganda", "comercial", "vinheta", "prefixo", "intervalo", 
    "identificador", "promo", "publicidade", "patrocinio", "informe",
    "espaco comercial", "hora certa", "vinheta de transicao", "spots",
    "massa fm", "maná fm", "radio maná", "aovivo", "ao vivo", "anuncio"
  ];
  
  return termos.some(termo => art.includes(termo) || mus.includes(termo));
}

// Atualizar metadados RDS nos dois players (principal e sticky)
async function updateMetadata() {
  if (!txtMusicaAtual || !txtArtistaAtual) return;
  
  // Tentar capturar metadados em tempo real da transmissão Shoutcast
  const realMeta = await buscarMetadadosReais();
  
  let musicaExibir = "";
  let artistaExibir = "";
  
  if (realMeta) {
    musicaExibir = realMeta.musica;
    artistaExibir = realMeta.artista;
  } else {
    // Se o Shoutcast não transmitir metadados ou se der CORS/bloqueio,
    // ativamos a rotação dinâmica de sucessos para manter o visual ativo
    const currentSong = MOCK_PLAYLIST[playlistIndex];
    musicaExibir = currentSong.musica;
    artistaExibir = currentSong.artista;
    
    playlistIndex = (playlistIndex + 1) % MOCK_PLAYLIST.length;
  }
  
  // Efeito fade-out suave ao trocar as informações nos displays
  txtMusicaAtual.style.opacity = 0;
  txtArtistaAtual.style.opacity = 0;
  if (txtStickyMusica) txtStickyMusica.style.opacity = 0;
  if (txtStickyArtista) txtStickyArtista.style.opacity = 0;
  
  // Verificar se o metadado atual é uma propaganda/comercial/vinheta
  const ehPropaganda = verificarPropaganda(artistaExibir, musicaExibir);
  let coverUrl = null;
  
  if (ehPropaganda) {
    // Se for comercial/vinheta, carrega a logo oficial circular da rádio Pulso FM
    const path = window.location.pathname.replace(/\\/g, '/');
    const isPage = path.includes('/pages/') || path.endsWith('/pages');
    coverUrl = (isPage ? "../" : "./") + "assets/icons/icon-512x512.png";
  } else {
    // Se for música normal, busca capa do álbum de forma assíncrona baseada na faixa ativa
    coverUrl = await buscarCapaAlbum(artistaExibir, musicaExibir);
  }
  
  setTimeout(() => {
    txtMusicaAtual.textContent = musicaExibir;
    txtArtistaAtual.textContent = artistaExibir;
    if (txtStickyMusica) txtStickyMusica.textContent = musicaExibir;
    if (txtStickyArtista) txtStickyArtista.textContent = artistaExibir;
    
    // Atualizar capas nos vinis giratórios
    if (coverUrl) {
      if (playerVinyl) {
        playerVinyl.style.background = `url('${coverUrl}')`;
        playerVinyl.style.backgroundSize = "cover";
        playerVinyl.style.backgroundPosition = "center";
      }
      if (stickyVinylDisc) {
        stickyVinylDisc.style.background = `url('${coverUrl}')`;
        stickyVinylDisc.style.backgroundSize = "cover";
        stickyVinylDisc.style.backgroundPosition = "center";
      }
    } else {
      // Se não achar capa correspondente, retorna ao vinil clássico preto com gradiente
      const defaultVinylBg = "radial-gradient(circle, #333 10%, #111 60%, #000 100%)";
      if (playerVinyl) {
        playerVinyl.style.background = defaultVinylBg;
      }
      if (stickyVinylDisc) {
        stickyVinylDisc.style.background = defaultVinylBg;
      }
    }
    
    // Fade-in suave com os metadados atualizados
    txtMusicaAtual.style.opacity = 1;
    txtArtistaAtual.style.opacity = 1;
    if (txtStickyMusica) txtStickyMusica.style.opacity = 1;
    if (txtStickyArtista) txtStickyArtista.style.opacity = 1;
  }, 300);
}

function startMetadataSimulation() {
  if (metadataInterval) clearInterval(metadataInterval);
  // Monitora e atualiza a música a cada 15 segundos para manter o player dinâmico
  metadataInterval = setInterval(updateMetadata, 15000);
}

// Fechar/ocultar o player do rodapé sticky
function closeStickyPlayer() {
  // 1. Pausar a transmissão se estiver ativa
  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
    setPlayingState(false);
  }
  // 2. Ocultar a barra do rodapé
  if (stickyPlayerBar) {
    stickyPlayerBar.classList.remove("visible");
  }
}
