// Funções de Data e Hora
let agora = new Date(); // Instanciando um objeto da classe date
console.log(agora);
console.log(agora.toLocaleString());

// Funções GET (pega informações) 
console.log(agora.getFullYear());

// Funções SET (altera informações)
agora.getFullYear(2030);

// Funções TO (imprimir) Formato de Texto
console.log(agora.toLocaleDateString);

//Manipulação de Datas
let data1 = new Date();
let data2 = new Date("2025-12-31"); // Quantos Dias Faltam para o Final do Ano

let diferenca = data2-data1; //milisegundos

console.log(diferenca/1000*60*60*24);