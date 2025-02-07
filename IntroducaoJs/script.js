// Tipos de dados

var nome = Isabela; // String (tipo texto)
var idade = 16; // Number (tipo número inteiro)
var nota = 9.8; // Number (tipo número decimal)
var data; // Undefined (tipo indefinido)
var aprovado = true; // Boolean (tipo boleana)
var diploma = null; // Null (tipo null)

// Variáveis e Constantes (var, let e const)

var nota1 = 5; //Declarar
nota1 = 7; //Redefinir
var nota1 = 10; //Redeclarar

let nota2 = 8; // Declarar 
nota2 = 9; // Redefinir
// let nota2 = 10;  Não consegue Redeclarar ERRO

const media = 7.5; //Declarar
// media = 8;  Não consegue ser redefinida ERRO 
// const media = 8; 

let a = 10;
let b = 3;
console.log("Soma = ", a+b); // 13
console.log("Sub = ", a-b); // 7
console.log("Mult = ", a*b); // 30
console.log("Div = ", a/b); // 3.33
console.log("Resto = ", a%b); //

// Operadores Relacionais (boolean)

console.log(5<10); //true
console.log(5==10); //true
console.log(5===10); //false

// Operadores Lógicos (E && , OU || e NÃO !)

var notaA = 5;
var notaB = 7;

console.log(notaA >= 7 || notaB >= 7); //true
console.log(notaA >= 7 && notaB >= 7); //false
console.log(!true); //false

// Condicionais (If/Else , switch(case))
 var idade = 25;

 if (idade >= 18) {
    console.log("Maior de Idade");
 } else {
    console.log("Menor de Idade");
 }

 var mes = 2;
 switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    default:
        console.log("Outro Mês")
        break;
 }

 // Loops (for / while / dowhile)

 for (let i = 0; i < 5; i++) {
    console.log("Iteração: " + i); // 0, 1, 2, 3, 4
 }

var condition = true;
var numero = 3;
var contador = 0;
 while (condition) {
    let sorteio = Math.random(5)
    contador++
    if (numero == sorteio) {
        console.log("Acertou com " + contador + "tentativas.");
        condition = false;
    }
 }

 //Funções (Function)

 function saudacao(nome) {
    return "Olá " + nome
 }

 console.log(saudacao("Isabela"));