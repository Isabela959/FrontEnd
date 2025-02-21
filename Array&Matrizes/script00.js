// Array e Matrizes

//Array
let numeros = [1,2,3,4,5,6,7,8,9]; //lista de elementos númericos
console.log(numeros[8]);

let texto = ["cachorro", "bola", "sapato", "prédio"] //lista de elementos textuais
let lista = ["gato", 2, true] //lista de elementos diversos
console.log(texto[1]);
console.log(lista[2]);

//Medir tamanho do array

console.log(texto.length);//4

//Adicionar elementos em um array e alterar

//adicionar 

//começo
texto.unshift("pão");
console.log(texto);

//final
texto.push("Jogo");
console.log(texto);

// Remover do começo(shift)
texto.shift();
// Remover do final(shift)
texto.pop();
console.log(texto);

//Alteração de Valor 
texto[2] = "tênis";
console.log(texto);

//Percorrer um Aray (For ou ForEach)

for (let i = 0; i < numeros.length; i++) {
    console.log("numeros ["+i+"]="+numeros[i]);
}

//Foreach

texto.forEach(t => {
    console.log(t)
});

let lista2 = [];
for (let i = 1; i <= 100; i++) {
    lista.push(1);
}
console.log(lista2);  

// Retorna o Índice

texto.indexOf("tênis");

// Splice - Remover elemento de posição específica

texto.splice(2,1); //posição, qauntidade de vezes
console.log(texto);

//Operações Avançadas de Arrays

let valores = [10,20,30,40];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let parteValores = valores.filter(x => x > 20);
console.log(parteValores);

// filtro e map x <35 x*2
let parte2Valores = valores.filter(x => x<35).map(x => x*2);
console.log(parte2Valores);

//Reduce
//x = acumulador // y = valor atual
let soma = valores.reduce((x,valorAtual)=>(x+valorAtual), 0);

//sort 
let z = [2,3,6,8,1,7,4,9,5];
z.sort();
console.log(z);