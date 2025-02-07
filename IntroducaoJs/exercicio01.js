// 1. Criar um Contador até 100

for (let i = 1; i <= 100; i++) {
    console.log(i)
}

// Verificar se um número é par ou ímpar

var prompt = require("prompt-sync")();
var numero;
numero = prompt("Digite um número: ");

if (numero%2 == 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}