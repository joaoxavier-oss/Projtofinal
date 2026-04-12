// ==========================================
// 1. ALTERNÂNCIA DE TEMA
// ==========================================
function alternarModo() {
    const corpo = document.body;
    const botao = document.getElementById("btn-tema");
    
    corpo.classList.toggle("modo-claro");

    if (corpo.classList.contains("modo-claro")) {
        botao.innerText = "Tema Claro";
        botao.style.background = "#ddd";
        botao.style.color = "#000";
    } else {
        botao.innerText = "Tema Escuro";
        botao.style.background = "rgba(0,0,0,0.5)";
        botao.style.color = "#fff";
    }
}

// ==========================================
// 2. NAVEGAÇÃO ENTRE PÁGINAS (IFRAME)
// ==========================================
function abrirPagina(pagina) {
    document.querySelector(".capa").style.display = "none";
    document.querySelector(".conteudo").style.display = "block";
    document.querySelector(".btn-voltar").style.display = "block";
    
    document.getElementById("frameSite").src = pagina + "?v=" + new Date().getTime();
}

function voltarPagina() {
    document.getElementById("frameSite").src = "about:blank"; 
    document.querySelector(".capa").style.display = "flex";
    document.querySelector(".conteudo").style.display = "none";
    document.querySelector(".btn-voltar").style.display = "none";
}

// ==========================================
// 3. IDENTIFICAÇÃO E IDADE
// ==========================================
let etapa = 1;
let nomeUsuario = "";

window.onload = function() {
    const ageModal = document.getElementById("ageModal");
    if (ageModal) ageModal.style.display = "flex";

    const ANO_LANCAMENTO = 2026; 
    const anoAtual = new Date().getFullYear(); 
    
    if (anoAtual === ANO_LANCAMENTO) {
        alert("GRANDE LANÇAMENTO: O jogo 'Última Cidade' foi lançado este ano de " + anoAtual + "!");
    }
};

function proximaEtapa() {
    if (etapa === 1) {
        nomeUsuario = document.getElementById("inputNome").value.trim();
        if (!nomeUsuario) { alert("Por favor, identifique-se."); return; }
        
        document.getElementById("mensagem").innerText = "Olá " + nomeUsuario + " 👋, agora digite sua idade:";
        document.getElementById("inputNome").style.display = "none";
        document.getElementById("inputIdade").style.display = "block";
        etapa = 2;
    } else if (etapa === 2) {
        const idadeInput = document.getElementById("inputIdade").value;
        if (!idadeInput) { alert("A idade é obrigatória."); return; }

        const playerNome = nomeUsuario;
        const playerIdade = idadeInput;
        const playerVida = 100;
        let playerNivel = 1;
        let playerMunicao = 45;

        document.getElementById("display-nome").innerText = "Agente " + playerNome;
        document.getElementById("display-idade").innerText = playerIdade;
        document.getElementById("display-vida").innerText = playerVida + "%";
        document.getElementById("display-nivel").innerText = playerNivel;
        document.getElementById("display-balas").innerText = playerMunicao;

        document.getElementById("status-jogo").style.display = "block";

        if (parseInt(idadeInput) < 18) {
            document.body.classList.add("restricao-idade");
            alert("ACESSO NEGADO: Conteúdo sensível restrito (blur ativado).");
        } else {
            document.body.classList.remove("restricao-idade");
            alert("ACESSO LIBERADO: Bem-vindo, Agente " + playerNome + "!");
        }
        
        document.getElementById("ageModal").style.display = "none";
    }
}

function abrirContato() { document.getElementById("contatoModal").style.display = "flex"; }
function fecharContato() { document.getElementById("contatoModal").style.display = "none"; }
function enviarMensagem() {
    alert("Mensagem enviada com sucesso! 🚀");
    fecharContato();
}