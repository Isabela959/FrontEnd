//galeria de Imagens -> DOM

let uploadInput = document.getElementById("upload"); //pegando o input
let addButton = document.getElementById("addImage"); //pegando o botão de enviar
let galeria = document.getElementById("galeria"); //pegando a galeria
let carrossel = document.getElementById("carrossel"); //pegando os espaços das imagens no carrossel

//upload das imagens
let imagens = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
"https://images.unsplash.com/photo-1521747116042-5a810fda9664",
"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
"https://images.unsplash.com/photo-1518837695005-2083093ee35b",
"https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
"https://images.unsplash.com/photo-1519681393784-d120267933ba",
"https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
"https://images.unsplash.com/photo-1506619216599-9d16d0903dfd",
"https://images.unsplash.com/photo-1494172961521-33799ddd43a5",
"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
]; //array -> guardar o endereço das imagens

addButton.addEventListener( //evento de clique para o botão
    "click", ()=>{
        //pegar o URL da imagem
        let imagemUrl = uploadInput.value.trim();
        if (imagemUrl === "") return; // se o campo estiver vazio, nada acontece (volta ao normal)
        imagens.push(imagemUrl); // adicionar à lista a nova imagem
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    }
);

//atualizarCarrossel
function atualizarCarrossel() {
    carrossel.innerHTML=""; // limpa o carrossel
    imagens.forEach(imagem => {
        const img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%` // cada imagem ocupa 100% do container -> conforme aumenta a quant de imagens, aumenta +100%
    iniciarCarrossel();
}

//iniciar Carrossel
function iniciarCarrossel() {
    let index = 0;
    setInterval(() => {
        index = (index + 1) % imagens.length;
        carrossel.style.transition = `transform 1s ease-in-out`;
        carrossel.style.transform = `translateX(-${index*(100/imagens.length)}%)`
    }, 2000);
}

//atualizarGaleria
function atualizarGaleria() {
    galeria.innerHTML="";
    imagens.forEach((imagem,index) => { // para cada imagem do vetor, vou precisar da imagem e da sua posição
        const card = document.createElement("div"); // criei a div
        card.classList.add("imagemCard") // adicionei uma classe
        const img = document.createElement("img");
        img.src = imagem;
        card.appendChild(img);// adicionar a imagem ao card
        galeria.appendChild(card);// add card -> adicionar a imagem a galeria
    });
}

atualizarGaleria();
atualizarCarrossel();
