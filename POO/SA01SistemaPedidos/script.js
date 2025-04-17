//criar as classes

class Cliente { //model (interagir com o banco de dados)
    #nome;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}

class Produto { //model (interagir com o banco de dados)
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido { //model (interagir com o banco de dados)
    constructor(id, cliente, itens, desconto) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens;
        this.desconto = desconto;
        this.total = this.calcularTotal();
    }

    calcularTotal() {
        let total = this.itens.reduce(
            (acc, item) => acc + (item.produto.preco * item.quantidade), 0
    );
        return total - total * (this.desconto / 100);
    }
}

class SistemaPedidos { //controller
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }

    //cadastros
    cadastrarCliente() {
        const nome = document.getElementById("clienteNome").value;
        if (!nome) return alert("Digite um nome para o cliente."); // ! = vazio
        const cliente = new Cliente(this.clientes.length + 1, nome)
        this.clientes.push(cliente);
        this.atualizarClientes(); //carrega a atualização no html para cada cadastro de novo cliente
        document.getElementById("clienteNome").value = ""; //limpa o input nome do cliente
    }

    cadastrarProduto() {
        const nome = document.getElementById("produtoNome").value;
        const preco = parseFloat(document.getElementById("produtoPreco").value);
        if (!nome || !preco) return alert("Preencha todos os campos do Produto");
        const produto = new Produto(this.produtos.length + 1, nome, preco);
        this.produtos.push(produto);
        this.atualizarProdutos();
        document.getElementById("produtoNome").value ="";
        document.getElementById("produtoPreco").value ="";
    }

    //atualizações
    atualizarClientes() {
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        const selectCliente = document.getElementById("selectCliente");
        selectCliente.innerHTML = '<option value = "">Selecione um cliente</option>';
        
        //percorrer a lista de clientes e preencher os elementos lista e select
        this.clientes.forEach(cliente => {
            //adicionar elementos dentro da lista
            const li = document.createElement("li");
            li.innerText = cliente.getNome();
            lista.appendChild(li); 

            //adiciono o cliente na seleção de clientes
            const option = document.createElement("option");
            option.value = cliente.id;
            option.textContent = cliente.nome;
            selectCliente.appendChild(option);
        });
    }

    atualizarProdutos(){
        const lista = document.getElementById("listaProdutos");
        lista.innerHTML = "";
        const produtoDiv = document.getElementById("produtosDisponiveis");
        produtoDiv.innerHTML = "";

        //percorrer a lista de produtos e preencher os elementos llista e div
        this.produtos.forEach(produto => {
            //adicionar produto na lista
            const li = document.createElement("li");
            li.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
            lista.appendChild(li);
            //adicionar o produto na div
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = produto.id;
            const label = document.createElement("label");
            label.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
            const inputQuantidade = document.createElement("input");
            inputQuantidade.type = "number";
            inputQuantidade.value = 1;
            inputQuantidade.min = 1;
            inputQuantidade.disabled = true;
            checkbox.addEventListener("change", ()=>{
              //  if (checkbox.checked) {
              //     inputQuantidade.disabled = false;
              // } else {
              //      inputQuantidade.disable = true;
              //  }
                inputQuantidade.disabled = !checkbox.checked;
            });
            produtoDiv.appendChild(checkbox);
            produtoDiv.appendChild(label);
            produtoDiv.appendChild(inputQuantidade);
            produtoDiv.appendChild(document.createElement("br"));
        });
    }      

    //criar pedido
    criarPedido(){
        const clienteId = parseInt(document.getElementById("selectCliente").value);
        if (!clienteId) return alert("selecione um Cliente");
        const cliente = this.clientes.find(c => c.id === clienteId);

        const desconto = parseFloat(document.getElementById("desconto").value) || 0;

        //produtos
        const itens = [];
        document.querySelectorAll("#produtosDisponiveis input[type='checkbox']").forEach((checkbox, index) => {
            if (checkbox.checked){
                const produtoId = parseInt(checkbox.value);
                const produto = this.produtos.find(p => p.id === produtoId);
                const quantidade = parseInt(document.querySelectorAll("#produtosDisponiveis input[type='number']")[index].value);
                itens.push({produto,quantidade});
            }
        });
        if (itens.length === 0) return alert("Selecione pelo menos um produto");
        const pedido = new Pedido(this.pedidos.length+1, cliente, itens, desconto);
        this.pedidos.push(pedido);
        this.atualizarPedidos();
    }

    atualizarPedidos(){
        const lista = document.getElementById("listaPedidos");
        lista.innerHTML = "";

        this.pedidos.forEach(pedido =>{
            const li = document.createElement("li");
            li.innerHTML = `Pedido ID: ${pedido.id} - Cliente: ${pedido.cliente.getNome()} - Total: R$ ${pedido.total.toFixed(2)}`;
            lista.appendChild(li);
        });
    }

}

//instanciar um objeto da classe sistemaPedidos

const sistema = new SistemaPedidos();