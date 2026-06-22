// Rádio Pulso FM - Script do Portal Comercial (comercial.js)

document.addEventListener("DOMContentLoaded", () => {
  initMenuComercial();
  initScrollSuaveComercial();
  initContadoresAnimados();
  initMarqueeComercial();
  initFormComercial();
  initTypewriter();
  initAnimacoesScrollComercial();
  initAnoFooter();
  initHeroCarousel();
});

// 1. Ano dinâmico no copyright
function initAnoFooter() {
  const ano = document.getElementById("ano-copyright");
  if (ano) ano.textContent = new Date().getFullYear();
}

// 2. Menu Mobile
function initMenuComercial() {
  const menuBtn = document.getElementById("menu-hamburger");
  const navLinks = document.getElementById("nav-links");
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    const expandido = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expandido);
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

// 3. Scroll suave
function initScrollSuaveComercial() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    });
  });
}

// 4. IntersectionObserver para animações de reveal
function initAnimacoesScrollComercial() {
  const elementos = document.querySelectorAll(".reveal");
  if (elementos.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach(el => observer.observe(el));
}

// 5. Contadores Animados (dados de audiência e plataforma)
function initContadoresAnimados() {
  const numerosAlvo = document.querySelectorAll(".dado-numero, .tec-stat-num");
  if (numerosAlvo.length === 0) return;

  function formatarNumero(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n.toLocaleString("pt-BR");
  }

  function animarContador(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duracao = 2200;
    const inicio = performance.now();

    function step(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      // Easeout exponencial suave
      const ease = 1 - Math.pow(1 - progresso, 4);
      const valorAtual = Math.round(ease * target);
      el.textContent = (suffix && suffix.trim() === "+") ? "+" + formatarNumero(valorAtual) : formatarNumero(valorAtual);
      if (progresso < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = (suffix && suffix.trim() === "+") ? "+" + formatarNumero(target) : formatarNumero(target);
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animarContador(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  numerosAlvo.forEach(el => observer.observe(el));
}

// 6. Marquee (letreiro de parceiros) — acelerado via CSS, mas garantido via JS
function initMarqueeComercial() {
  // O efeito já está em CSS puro. Este script monitora hover para pausar.
  const track = document.getElementById("marquee-track");
  if (!track) return;

  const wrapper = track.parentElement;
  if (!wrapper) return;

  wrapper.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  wrapper.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}

// 7. Efeito de Typewriter no Hero
function initTypewriter() {
  const el = document.getElementById("hero-typewriter");
  if (!el) return;

  const palavras = ["milhões de", "mais de 2M de", "a audiência mais fiel de"];
  let wordIndex = 0;
  let charIndex = 0;
  let apagando = false;
  let delay = 120;

  function tipo() {
    const palavraAtual = palavras[wordIndex];

    if (apagando) {
      el.textContent = palavraAtual.substring(0, charIndex - 1);
      charIndex--;
      delay = 60;
    } else {
      el.textContent = palavraAtual.substring(0, charIndex + 1);
      charIndex++;
      delay = 100;
    }

    if (!apagando && charIndex === palavraAtual.length) {
      delay = 2000;
      apagando = true;
    } else if (apagando && charIndex === 0) {
      apagando = false;
      wordIndex = (wordIndex + 1) % palavras.length;
      delay = 400;
    }

    setTimeout(tipo, delay);
  }

  setTimeout(tipo, 800);
}

// 8. Formulário Comercial com validação e modal de sucesso
function initFormComercial() {
  const form = document.getElementById("form-comercial");
  const overlay = document.getElementById("modal-comercial-overlay");
  const btnFechar = document.getElementById("btn-modal-fechar");

  if (!form) return;

  // Máscara de telefone
  const telInput = document.getElementById("com-telefone");
  if (telInput) {
    telInput.addEventListener("input", () => {
      let val = telInput.value.replace(/\D/g, "");
      if (val.length <= 11) {
        val = val.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        val = val.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
      }
      telInput.value = val;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("com-nome").value.trim();
    const empresa = document.getElementById("com-empresa").value.trim();
    const email = document.getElementById("com-email").value.trim();
    const telefone = document.getElementById("com-telefone").value.trim();
    const aceite = document.getElementById("com-aceite").checked;

    if (!nome || !empresa || !email || !telefone) {
      mostrarAlertaComercial("Por favor, preencha todos os campos obrigatórios antes de enviar.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      mostrarAlertaComercial("Por favor, insira um e-mail corporativo válido.");
      return;
    }

    if (!aceite) {
      mostrarAlertaComercial("Por favor, marque a caixa de concordância para prosseguir.");
      return;
    }

    // Simular envio (sucesso)
    const btn = document.getElementById("btn-comercial-enviar");
    btn.textContent = "Enviando...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    setTimeout(() => {
      form.reset();
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Enviar Proposta Comercial`;
      btn.disabled = false;
      btn.style.opacity = "1";

      if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }, 1400);
  });

  // Fechar modal
  if (btnFechar && overlay) {
    btnFechar.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}

function mostrarAlertaComercial(msg) {
  // Alerta customizado no topo do formulário
  let alertEl = document.getElementById("form-alert-comercial");
  if (!alertEl) {
    alertEl = document.createElement("div");
    alertEl.id = "form-alert-comercial";
    alertEl.style.cssText = `
      background: rgba(214,48,49,0.08);
      border: 1px solid rgba(214,48,49,0.3);
      color: #d63031;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 0.88rem;
      font-weight: 600;
      margin-bottom: 20px;
      animation: fadeIn 0.3s ease;
    `;
    const form = document.getElementById("form-comercial");
    form.insertBefore(alertEl, form.firstChild);
  }
  alertEl.textContent = msg;
  alertEl.style.display = "block";
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

// 9. Carrossel de Imagens do Hero
function initHeroCarousel() {
  const carousel = document.getElementById("hero-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoplayTimer = null;
  const autoplayDelay = 5000; // 5 segundos

  function showSlide(index) {
    // Garantir índice correto (circular)
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Atualizar slides
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add("active");
        slide.setAttribute("aria-hidden", "false");
      } else {
        slide.classList.remove("active");
        slide.setAttribute("aria-hidden", "true");
      }
    });

    // Atualizar dots
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add("active");
        dot.setAttribute("aria-label", `Slide ${idx + 1} (ativo)`);
      } else {
        dot.classList.remove("active");
        dot.setAttribute("aria-label", `Ir para o slide ${idx + 1}`);
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Lógica de Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Listeners - Cliques nas setas
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      prevSlide();
      startAutoplay(); // Reinicia timer
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      nextSlide();
      startAutoplay(); // Reinicia timer
    });
  }

  // Listeners - Cliques nos dots
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      startAutoplay(); // Reinicia timer
    });
  });

  // Hover: Pausar reprodução automática
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // Acessibilidade por teclado
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      startAutoplay();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      startAutoplay();
    }
  });

  // Inicializar o autoplay
  startAutoplay();
}
