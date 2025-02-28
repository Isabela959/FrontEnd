// Situação de Aprendizagem 01 - Array

const prompt = require("prompt-sync")(); // Entrada de Dados

// array notas
let notas =[]; // array de notas

function inserirnotas() {
    let nota = Number(prompt("Digite a nota: "));
    notas.push(nota);
}

function calcularMedia() {
    let media = notas.reduce((soma, nota) => soma+nota,0)/notas.length
    console.log("A Média é: " + media);
}

function menu() {
    let continuar = true;
    while (continuar) {
        console.log("=== Calculadora Média ===");
        console.log("1. Inserir Nota ");
        console.log("2. Calcular Média");
        console.log("3. Sair");
        console.log("=========================");
        let operacao = prompt("Escolha a Opção Desejada: ");
        switch (operacao) {
            case "1":
                inserirnotas();
                break;
            case "2":
                calcularMedia();
                break;
            case "3":
                continuar = false;
                console.log("Saindo...")
                break;
            default:
                console.log("Essa Opção não é válida");
                break;
        } // Fim do Switch
    } // Fim do While
} // Fim da Function

menu();