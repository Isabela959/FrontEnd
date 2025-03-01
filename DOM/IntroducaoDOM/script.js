// Manipulação de HTML

// Exemplo de Uso do DOM

function testeDOM() {
    document.getElementById("titulo").innerText = "Texto Alterado";
}

// Selecionando Elementos
// getElementById() -> Variável Simples

let titulo = document.getElementById("titulo"); 
console.log(titulo);

titulo.style.color = "blue"; //mudando a cor para azul

// getElementsByClassName()
let descricao = document.getElementsByClassName("descricao"); //vetor -> array
console.log(descricao);

descricao[1].style.fontWeight = "bold";
descricao[2].style.color = "green";

// getElementsByTag() -> Vetor
let tituloH3 = document.getElementsByTagName("h3");
tituloH3[0].style.color = "red";

//getElementsByName() -> Vetor

// querySelector -> Tag("tag"); Class(".class"); ID("#id")
// querySelector -> Variável Simples
let primeiroH1 = document.querySelector("h1");
primeiroH1.innerText = "Meu Teste de DOM";

//querySelectorAll -> vetor
let todosParagrafos = document.querySelectorAll("p");
todosParagrafos.forEach(x=>
    x.style.fontSize = "18px"
);
