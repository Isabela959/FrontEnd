//criando a classe carro
class Carro {
    //não tem atributos diretos
    //fica dentro do construtor -> define os atributos da classe
    constructor(marca, modelo, ano, cor, preco){ //parâmetos
        this.marca = marca; //parâmetros viram atributos -> parâmetro da função/método;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    //método
    exibirInfo(){
        console.log(`Carro:${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }
}

//criar objetos da classe carro
//NEW em qualquer linguagem de programação é CRIAR/INSTANCIAR OBJETO de determinada classe
//o objeto precisa ter os atributos
let carro1 = new Carro("Fiat", "Uno", 1994, "Cinza", 8000.00); 
let carro2 = new Carro("GM", "Corsa", 2011, "Preto", 20000.00);

carro1.exibirInfo();
carro2.exibirInfo();

// atributos privados(#) e públicos
//em vez de _ underline, é # hashtag

class Usuario{
    #nome; //declaração de atributos privados
    #senha; //declaração de atributos privados
    constructor(nome, senha){
        this.#nome = nome;
        this.#senha = senha;
    }

    //método privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha;
    }
}