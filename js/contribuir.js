let donationValue = 5.00;
let selectedPaymentMethod = 'pix';

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obter valor da URL
  const urlParams = new URLSearchParams(window.location.search);
  let valParam = parseFloat(urlParams.get('val'));
  if (!isNaN(valParam) && valParam >= 5) {
    donationValue = valParam;
  }
  
  // 2. Atualizar exibição do valor
  const displayVal = document.getElementById("display-value");
  if (displayVal) {
    displayVal.textContent = `R$ ${donationValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  }

  // 3. Atualizar titular do cartão em tempo real ao digitar o nome
  const nameInput = document.getElementById("donor-name");
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      const nameVal = e.target.value.trim().toUpperCase();
      document.getElementById("card-name-preview").textContent = nameVal || "APOIADOR ANÔNIMO";
    });
  }
});

// Selecionar método de pagamento
function selectPaymentMethodLocal(method) {
  selectedPaymentMethod = method;

  const cards = document.querySelectorAll(".payment-method-card");
  cards.forEach(card => card.classList.remove("active"));

  const activeCard = document.getElementById(`method-${method}`);
  if (activeCard) activeCard.classList.add("active");
}

// Avançar para passo 2
function proceedToPaymentDetailsLocal() {
  const donorName = document.getElementById("donor-name").value.trim();
  
  // Esconder painel do passo 1, mostrar painel do passo 2
  document.getElementById("pane-step-1").classList.remove("active");
  document.getElementById("pane-step-2").classList.add("active");

  // Atualizar indicadores de passos
  document.getElementById("step-indicator-1").classList.remove("active");
  document.getElementById("step-indicator-1").classList.add("completed");
  document.getElementById("step-indicator-2").classList.add("active");

  // Ocultar todas as visões de pagamento e exibir a selecionada
  document.getElementById("pane-details-pix").style.display = "none";
  document.getElementById("pane-details-card").style.display = "none";

  if (selectedPaymentMethod === 'pix') {
    document.getElementById("pane-details-pix").style.display = "flex";
    // Gerar chave pix simulada
    const pixInput = document.getElementById("pix-copia-cola-local");
    if (pixInput) {
      pixInput.value = `00020126580014br.gov.bcb.pix0136radiomanafm-pix-donation-v${donationValue.toFixed(0)}-5303986`;
    }
  } else if (selectedPaymentMethod === 'card') {
    document.getElementById("pane-details-card").style.display = "block";
  }
}

// Voltar para passo 1
function backToStep1Local() {
  document.getElementById("pane-step-1").classList.add("active");
  document.getElementById("pane-step-2").classList.remove("active");

  document.getElementById("step-indicator-1").classList.add("active");
  document.getElementById("step-indicator-1").classList.remove("completed");
  document.getElementById("step-indicator-2").classList.remove("active");
}

// Copiar PIX
function copyPixKeyLocal() {
  const pixInput = document.getElementById("pix-copia-cola-local");
  if (pixInput) {
    pixInput.select();
    pixInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pixInput.value);
    if (typeof mostrarToast === "function") {
      mostrarToast("Chave PIX Copiada!", "success");
    } else {
      alert("Chave PIX Copiada!");
    }
  }
}

// ==========================================================================
// FUNÇÕES DE FORMATO E INTERAÇÃO DO CARTÃO 3D
// ==========================================================================
function flipCard(isBack) {
  const card = document.getElementById("credit-card-3d");
  if (card) {
    if (isBack) {
      card.classList.add("flipped");
    } else {
      card.classList.remove("flipped");
    }
  }
}

function updateCardNumber(val) {
  // Remove caracteres não-numéricos
  let digits = val.replace(/\D/g, '');
  
  // Limita a 16 dígitos
  digits = digits.substring(0, 16);
  
  // Agrupa de 4 em 4 com espaços
  let formatted = '';
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += ' ';
    }
    formatted += digits[i];
  }
  
  // Atualiza o input com o valor formatado
  document.getElementById("card-number-local").value = formatted;
  
  // Atualiza a visualização do cartão
  const preview = document.getElementById("card-num-preview");
  preview.textContent = formatted || "•••• •••• •••• ••••";

  // Atualiza o deboss (verso) do cartão
  const debossedPreview = document.getElementById("card-num-debossed-preview");
  if (debossedPreview) {
    debossedPreview.textContent = formatted || "•••• •••• •••• ••••";
  }

  // Atualiza os últimos 4 dígitos no campo de assinatura do verso
  const dummyPreview = document.getElementById("card-signature-dummy-preview");
  if (dummyPreview) {
    const lastFour = digits.substring(Math.max(0, digits.length - 4));
    dummyPreview.textContent = lastFour || "1234";
  }

  // Identificação da Bandeira e mudança do background/logo
  let brandHTML = 'MANÁ CARD';
  let hologramHTML = '';
  let bgGradient = 'linear-gradient(135deg, #1a3064 0%, #4e678d 60%, #b98d42 100%)';

  if (digits.startsWith('4')) {
    // Visa
    brandHTML = `<img src="../assets/bandeiras-cartão/visa.png" alt="Visa" class="brand-logo-img brand-logo-visa">`;
    hologramHTML = `<img src="../assets/bandeiras-cartão/visa.png" alt="Visa" class="hologram-logo-img">`;
    bgGradient = 'linear-gradient(135deg, #0d1a3a 0%, #17356b 65%, #0b152d 100%)';
  } else if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) {
    // Mastercard
    brandHTML = `<img src="../assets/bandeiras-cartão/mastercard.svg" alt="Mastercard" class="brand-logo-img brand-logo-mastercard">`;
    hologramHTML = `<img src="../assets/bandeiras-cartão/mastercard.svg" alt="Mastercard" class="hologram-logo-img">`;
    bgGradient = 'linear-gradient(135deg, #151515 0%, #2f2f2f 60%, #0a0a0a 100%)';
  } else if (digits.startsWith('34') || digits.startsWith('37')) {
    // American Express
    brandHTML = `<img src="../assets/bandeiras-cartão/amex.png" alt="Amex" class="brand-logo-img brand-logo-amex">`;
    hologramHTML = `<img src="../assets/bandeiras-cartão/amex.png" alt="Amex" class="hologram-logo-img">`;
    bgGradient = 'linear-gradient(135deg, #385375 0%, #7da2c4 60%, #1e2f47 100%)';
  } else if (/^(40117[89]|438935|45763[12]|504175|506699|509000)/.test(digits) || digits.startsWith('636368') || digits.startsWith('636297')) {
    // Elo
    brandHTML = `<img src="../assets/bandeiras-cartão/elo.png" alt="Elo" class="brand-logo-img brand-logo-elo">`;
    hologramHTML = `<img src="../assets/bandeiras-cartão/elo.png" alt="Elo" class="hologram-logo-img">`;
    bgGradient = 'linear-gradient(135deg, #001f3f 0%, #004080 60%, #e65c00 100%)';
  }

  // Atualiza o logotipo da bandeira
  const brandContainer = document.getElementById("card-brand-preview");
  if (brandContainer) {
    brandContainer.innerHTML = brandHTML;
  }

  // Atualiza o holograma do verso do cartão
  const hologramContainer = document.getElementById("card-hologram-preview");
  if (hologramContainer) {
    hologramContainer.innerHTML = hologramHTML;
  }

  // Atualiza o background da frente do cartão com transição suave
  const frontCard = document.querySelector(".card-face.front");
  if (frontCard) {
    frontCard.style.background = bgGradient;
  }
}

function updateCardExpiry(val) {
  // Remove tudo que não for número
  let clean = val.replace(/\D/g, '');
  
  // Limita a 4 dígitos
  clean = clean.substring(0, 4);
  
  let formatted = '';
  if (clean.length > 2) {
    formatted = clean.substring(0, 2) + '/' + clean.substring(2, 4);
  } else {
    formatted = clean;
  }
  
  // Atualiza o input
  document.getElementById("card-expiry-local").value = formatted;
  
  // Atualiza o preview no cartão
  const preview = document.getElementById("card-expiry-preview");
  preview.textContent = formatted || "MM/AA";
}

function updateCardCvv(val) {
  // Limita a 4 dígitos numéricos
  let clean = val.replace(/\D/g, '').substring(0, 4);
  document.getElementById("card-cvv-local").value = clean;
  
  // Atualiza o preview
  const preview = document.getElementById("card-cvv-preview");
  preview.textContent = clean || "•••";
}

function updateCardHolder(val) {
  const nameVal = val.trim().toUpperCase();
  document.getElementById("card-name-preview").textContent = nameVal || "APOIADOR ANÔNIMO";
}

// Confirmar pagamento simulado
function confirmSimulatedDonationLocal() {
  let donorName = document.getElementById("donor-name").value.trim() || "Apoiador Anônimo";

  // Validação rápida para simular dados do cartão
  if (selectedPaymentMethod === 'card') {
    const cardNum = document.getElementById("card-number-local").value.trim();
    const cardHolder = document.getElementById("card-holder-local").value.trim();
    const cardExpiry = document.getElementById("card-expiry-local").value.trim();
    const cardCvv = document.getElementById("card-cvv-local").value.trim();
    
    if (cardNum === "" || cardHolder === "" || cardExpiry === "" || cardCvv === "") {
      if (typeof mostrarToast === "function") {
        mostrarToast("Preencha todos os campos do cartão para simular", "warning");
      } else {
        alert("Preencha todos os campos do cartão para simular");
      }
      return;
    }
  }

  // 1. Ler dados da campanha do localStorage
  let campaignData = JSON.parse(localStorage.getItem("MANA_CAMPAIGN_DATA"));
  if (!campaignData) {
    campaignData = {
      totalRaised: 1250.00,
      goal: 3000.00,
      contributorsCount: 85,
      recentDonations: []
    };
  }

  // 2. Incrementar contadores
  campaignData.totalRaised += donationValue;
  campaignData.contributorsCount += 1;

  // 3. Pegar hora formatada
  const agora = new Date();
  const horaStr = `${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}`;

  // 4. Inserir no topo da lista de contribuições
  campaignData.recentDonations.unshift({
    nome: donorName,
    valor: donationValue,
    hora: horaStr
  });

  // 5. Salvar de volta no localStorage
  localStorage.setItem("MANA_CAMPAIGN_DATA", JSON.stringify(campaignData));

  // 6. Transição para Passo 3 (Sucesso)
  document.getElementById("pane-step-2").classList.remove("active");
  document.getElementById("pane-step-3").classList.add("active");

  document.getElementById("step-indicator-2").classList.remove("active");
  document.getElementById("step-indicator-2").classList.add("completed");
  document.getElementById("step-indicator-3").classList.add("active");

  // 7. Iniciar contagem regressiva para redirecionar para a página inicial
  let countdown = 4;
  const countdownTimerSpan = document.getElementById("countdown-timer");
  
  const timer = setInterval(() => {
    countdown--;
    if (countdownTimerSpan) {
      countdownTimerSpan.textContent = countdown;
    }
    if (countdown <= 0) {
      clearInterval(timer);
      window.location.href = "../index.html";
    }
  }, 1000);
}
