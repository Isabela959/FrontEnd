import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  //atributos
  nome: string = "";
  preco:number = 0;

  constructor(private dadoService: DadosService){}

  adicionarProduto(){
    const produto = new Produto(this.dadoService.getProdutos().length+1, this.nome, this.preco)
    this.dadoService.adicionarProduto(produto);
    this.nome = "";
    this.preco = 0;
  }

}
