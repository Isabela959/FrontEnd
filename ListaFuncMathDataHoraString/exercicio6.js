// Manipulação de Datas e Horas ARRUMAR

 var prompt = require("prompt-sync")();

 let dataAtual = new Date();
 let dataNascimento = Date(prompt("Digite Sua Data de Nascimento: "));

function calcularIdade(dataAtual, dataNascimento) {
    return dataAtual - dataNascimento;
}

console.log("Você tem ", (calcularIdade(dataAtual,dataNascimento)), " anos.");
 

