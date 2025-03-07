//Exibir no console

let tituloH1 = document.getElementById("titulo");
let paragrafoP = document.querySelector(".paragrafo");

console.log("titulo");
console.log("paragrafo");

// Parte 2

function mudarTexto() {
    tituloH1.innerText = "Novo Título";
    paragrafoP.innerText = "Novo Parágrafo";
}

// parte 3 - Modificar Estilo

function mudarFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

// Adicionar uma classe ao elemento

function adicionarClasse() {
    tituloH1.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red";
}