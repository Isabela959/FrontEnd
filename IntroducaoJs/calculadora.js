// Criar uma calculadora simples em Java Script

var prompt = require("prompt-sync")();

var numero1, numero2, resultado;
var operacao;
var continuar = true;

// Funções de Operação

function adicao(a, b) {
    return a+b;
}
function subtracao(a, b) {
    return a-b;
}
function multiplicacao(a, b) {
    return a*b;
}
function divisao(a, b) {
    return a/b;
}

while (continuar) {
  console.log("Calculadora Simples");
  console.log("1. Adição");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair");
  operacao = Number(prompt("informe a Operação Desejada:"));
  //pedir os números
  numero1 = Number(prompt("Informe o Primeiro Número: "));
  numero2 = Number(prompt("Informe o Segundo Número: "));
}
    //condição de escolha
    switch (operacao) {
        case 1:
            resultado = adicao(numero1,numero2)
            console.log ("O Resultado é: " + resultado)
            break;
        case 2:
            resultado = subtracao(numero1,numero2)
            console.log ("O Resultado é: " + resultado)
            break;
        case 3:
            resultado = multiplicacao(numero1,numero2)
            console.log ("O Resultado é: " + resultado)
            break;
        case 4:
            resultado = divisao(numero1,numero2)
            console.log ("O Resultado é: " + resultado)
            break;
        case 5:
            var continuar = false
            console.log("Saindo...")
            break;
        default:
            break;
    }
