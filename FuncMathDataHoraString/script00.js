// Funções Matemáticas (Math)

//Math.sqrt //Math.pow

//Raiz Quadrada de 25
console.log(Math.sqrt(25)); //5;
//Potência de um nº
console.log(Math.pow(3,2)); //9
console.log(Math.pow(4,3)); //64
console.log(Math.pow(27, 1/3)); //3

//Arredondamento usando Math.round, Math.ceil e Math.floor

//round : número mais próximo 
console.log(Math.round(4.3)); //4
console.log(Math.round(4.7)); //5
console.log(Math.round(4.51)); //5
console.log(Math.round(4.5)); //4
//floor : número para baixo
console.log(Math.floor(4.9)); //4
//ceil : número para cima
console.log(Math.floor(4.1)); //5

//Math.random - números aleatórios

console.log(Math.random()); // 0 -> 1
//0 -> 100
console.log(Math.round(Math.random()*100)); 
//0 -> 99
console.log(Math.floor(Math.random()*100)); 
//1 -> 100
console.log(Math.ceil(Math.random()*100)); 
//30 -> 40
console.log(Math.round(Math.random()*10+30)); 
//50 -> 100
console.log(Math.round(Math.random()*50+50)); 

// Math.abs (absolute)
console.log(Math.abs(-10)); //10
// Math.min (2,3,4,5)
console.log(Math.min(1,2,3,4,5,6)); //1
// Math.max (2,3,4,5)
console.log(Math.max(1,2,3,4,5,6)); //6
