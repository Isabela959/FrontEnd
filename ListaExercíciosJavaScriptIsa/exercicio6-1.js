var prompt = require("prompt-sync")();

let numAleatorio = Math.floor(Math.random() * 10) + 1;
let num = prompt("Adivinhe Um Número entre 1 a 10: ");

if (numAleatorio == num) {
    console.log("Você Acertou!")
} else {
    console.log("Você Errou =( O Número era: " + numAleatorio)
}