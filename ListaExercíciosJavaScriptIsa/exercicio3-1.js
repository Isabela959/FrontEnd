var prompt = require("prompt-sync")();

let num = Number(prompt('Digite o Número a Ser Analisado: '));

if (num % 2 == 0) {
    console.log("O Número é Par!");
} else {
    console.log("O Número é Ímpar!");
}