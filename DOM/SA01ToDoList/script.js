// Lista de Tarefas (To Do List)

// Disparar o evento
document.getElementById("btnAdicionar").addEventListener("click", criarTarefa);

function criarTarefa() {
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();
    // Verificar se a tarefa não está vazia
    if (texto==='') {
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removerTarefa(this)">Remover Tarefa</button>';
    //adicionar o li -> ul
    let ul = document.getElementById("lista");
    ul.appendChild(li); // adiciona o li ao ul
    input.value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove()
}

// Parte 2 - Jogo de Alteração de Cores

document.getElementById("mudarCor").addEventListener("click", function() {
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});