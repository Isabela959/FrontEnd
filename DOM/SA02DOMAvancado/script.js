// Script para Quiz Interativo
// vetor para armazenar as perguntas
let perguntas = [];
let perguntaAtual = 0;

// estabelecer a conexão com o json

fetch("perguntas.json")
    .then(response => response.json)
    .then(data => {
        perguntas = data;
        carregarPerguntas(); // function
    }).catch(erro => console.error("Erro ao Carregar Perguntas", + erro))

    // Mostrar as Perguntas na Tela
    const perguntaEL = document.getElementById("pergunta");
    const opcoesEL = document.getElementById("opcoes");
    const proximaEL = document.getElementById("proxima");
    const respostaEL = document.getElementById("resposta");

    function carregarPergunta(){
        resultadoEl.innerText = ""
        proximaEl.disabled = true;
    
        if (perguntaAtual>=perguntas.length) {
            perguntaEl.innerText = "Quiz finalizado!";
            opcoesEl.innerHTML = "";
            proximaEl.style.display = "none";
            return; 
        }
        const p = perguntas[perguntaAtual];
        perguntaEl.innerText = p.pergunta;
        opcoesEl.innerHTML = "";
    
        p.opcoes.forEach(opcao => {
            const btn = document.createElement("button");
            btn.innerText = opcao;
            btn.classList.add("opcao");
            btn.addEventListener("click", () => verificarResposta(opcao, btn));
            opcoesEl.appendChild(btn);
        });
    
    }
    
    function verificarResposta(opcao, btn) {
        const respostaCorreta = perguntas[perguntaAtual].resposta;
        if (opcao === respostaCorreta) {
            btn.classList.add("correta");
            resultadoEl.innerText = "Correto!";
        } else {
            btn.classList.add("errada");
            resultadoEl.innerText = `Errado! A resposta correta era: ${respostaCorreta}`;
        }
    
        document.querySelectorAll(".opcao").forEach(b => b.disabled = true);
        proximaEl.disabled = false;
    }
    
    document.getElementById("proxima").addEventListener(
        "click", () =>{
        perguntaAtual++;
        carregarPergunta();}
    ); 