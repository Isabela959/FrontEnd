var prompt = require("prompt-sync")();

let peso = Number (prompt("Digite Seu Peso: "));
let altura = Number (prompt("Digite Sua Altura: "));
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do Peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso Normal")
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso")   
} else {
    console.log("Obesidade")
}

console.log("Seu IMC é: " + imc);