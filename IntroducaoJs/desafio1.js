// Desafio 1 : Verificação de Idade

var prompt = require("prompt-sync")();

idade = Number(prompt("Digite sua Idade: "));






if (idade < 18) {
    console.log("Você é Menor de Idade.")
}else if (idade >= 18 && idade < 60) {
    console.log("Você é Adulto.")
} else {
    console.log("Você é Idoso.")
};
