// Funções de Texto
let texto ="Aula de JavaScript";

// Contagem dos Caracteres
console.log(texto.length);//18

//Maiúsculas e Minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULA
console.log(texto.toLowerCase()); //minúsculo

//Partes da String
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//Substituir Parte da String
let novoTexto = texto.replace("Java", "Type"); 
console.log(novoTexto);

//Trim (tesoura)

let textoEspaco = "  JavaScript  ";
let textoCortado = textoEspaco.trim;

//Split (separação)
let linguagens = "JavaScript, Python, PHP, C++ e Java";
let linguagensArray = linguagens.split(',');
console.log(linguagens);
console.log(linguagensArray);