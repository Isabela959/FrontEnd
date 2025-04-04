class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade){
        if(quantidade>this.estoque) {
            console.log(
                `Estoque Insuficiente! Quantidade em Estoque é = ${this.estoque}`
            );
            return;
        }
        this.estoque -= quantidade; // this.estoque = this.estoque - quantidade
        console.log(`${quantidade} ${quantidade===1?"Unidade":"Unidades"} vendida(s). Estoque restante: ${this.estoque}`);
    }

    repor(quantidade){
        this.estoque += quantidade; // this.estoque = this.estoque + quantidade
        console.log(`Estoque atual: ${this.estoque}`);
    }

    exibirInfo(){
        console.log(`Produto: ${this.nome}. Preço: R$${this.preco}. Estoque: ${this.estoque}`);
    }
}

let p1 = new Produto("Celular", 1500, 10);
p1.exibirInfo();
p1.vender(2);
p1.repor(5);
p1.exibirInfo();

    