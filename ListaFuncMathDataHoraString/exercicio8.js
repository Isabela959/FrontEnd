// Manipulação de Datas e Horas

let dataHoje = new Date("2025-02-14");
let dataNatal = new Date("2025-12-25");
let diferenca = dataHoje - dataNatal; 

let dias = diferenca / (1000 * 60 * 60 * 24); 
console.log(`Diferença entre as datas: ${dias} dias`);
