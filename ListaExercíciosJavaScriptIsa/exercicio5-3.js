var prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite a primeira nota: "));
let n2 = Number(prompt("Digite a segunda nota: "));
let n3 = Number(prompt("Digite a terceira nota: "));

var media = (n1 + n2 + n3) / 3;


if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
