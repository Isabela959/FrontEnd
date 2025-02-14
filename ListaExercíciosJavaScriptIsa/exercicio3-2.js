var prompt = require("prompt-sync")();

let idade = prompt("Digite Sua Idade: ");

if (idade < 16) {
    console.log("Você não pode votar.");
} else if (idade >= 16 && idade < 18) {
    console.log("Seu voto é opcional.");
} else {
   console.log("O voto é obrigatório e você pode tirar CNH.");
}