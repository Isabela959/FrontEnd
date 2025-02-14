var prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o Primeiro Número:"));
let num2 = Number(prompt("Digite o Segundo Número:"));

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);
