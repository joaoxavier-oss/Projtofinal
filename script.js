// ==========================================
// 1. NAVEGAÇÃO ENTRE PÁGINAS (IFRAME)
// ==========================================
function abrirPagina(pagina) {
    document.querySelector(".capa").style.display = "none";
    document.querySelector(".conteudo").style.display = "block";
    document.querySelector(".btn-voltar").style.display = "block";

    // Lógica Anti-Cache para carregar os arquivos novos extraídos
    const cacheBuster = "?v=" + new Date().getTime();
    const linkFinal = pagina + cacheBuster;

    const iframe = document.getElementById("frameSite");
    iframe.src = linkFinal;
}

function voltarPagina() {
    document.getElementById("frameSite").src = "sobre.html";
    document.querySelector(".capa").style.display = "flex";
    document.querySelector(".conteudo").style.display = "none";
    document.querySelector(".btn-voltar").style.display = "none";
}

// ==========================================
// 2. SISTEMA DE CONTATO
// ==========================================
function abrirContato() {
    document.getElementById("contatoModal").style.display = "flex";
}

function fecharContato() {
    document.getElementById("contatoModal").style.display = "none";
}

function enviarMensagem() {
    alert("Mensagem enviada com sucesso! 🚀");
    fecharContato();
}

// ==========================================
// 3. SISTEMA DE IDENTIFICAÇÃO (MODAL DE IDADE)
// ==========================================
let etapa = 1;
let nomeUsuario = "";

window.onload = function() {
    // Garante que o modal apareça ao carregar
    const ageModal = document.getElementById("ageModal");
    if (ageModal) ageModal.style.display = "flex";
};

function proximaEtapa() {
    if (etapa === 1) {
        nomeUsuario = document.getElementById("inputNome").value.trim();
        if (!nomeUsuario) { 
            alert("Por favor, digite seu nome."); 
            return; 
        }
        document.getElementById("mensagem").innerText = "Olá " + nomeUsuario + " 👋, agora me diga sua idade:";
        document.getElementById("inputNome").style.display = "none";
        document.getElementById("inputIdade").style.display = "block";
        etapa = 2;
    } else if (etapa === 2) {
        const idadeInput = document.getElementById("inputIdade").value;
        if (!idadeInput) { 
            alert("A idade é obrigatória."); 
            return; 
        }
        
        if (parseInt(idadeInput) < 18) {
            document.body.classList.add("restricao-idade");
        }
        
        document.getElementById("ageModal").style.display = "none";
    }
}