// Exemplo de uso do DOM
// header -> DOM

let header = document.createElement("div");
document.body.appendChild(header);
header.style.backgroundColor = "black";
header.style.height = "8vh";

let menu = document.createElement("div");
header.appendChild(menu);

header.classList.add("header");
menu.classList.add("menu");

let menuItens = ["Início", "Produtos", "Contato"];
menuItens.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    menu.appendChild(item);
});

menu.style.display = "flex";
menu.style.justifyContent = "space-around";
menu.style.color = "white";
menu.style.alignItems = "center";
menu.style.height = "100%"; // Ocupar 100% do espaço da div header para ficar exatamente no meio da barra
menu.style.fontSize = "21px";

// Footer -> DOM


