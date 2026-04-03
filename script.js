function entrar() {
    window.location.href = "index.html";
}

if(!sessionStorage.getItem("entrou")) {
    window.location.href = "index.html";
}