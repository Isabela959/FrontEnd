import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  //atributo
  clientes: Cliente[];
  produtos: Produto[];
  clienteSelecionadoId = "";
  produtoSelecionadoId: string[] = [];
  desconto = 0;

  constructor(private dadosService: DadosService){
    this.clientes = this.dadosService.getClientes();
    this.produtos = this.dadosService.getProdutos();
  }

  selecionarProduto(id: string){
    const index = this.produtoSelecionadoId.indexOf(id);
    if(index >=0){
      this.produtoSelecionadoId.splice(index,1);
    }else{
      this.produtoSelecionadoId.push(id);
    }
  }

  salvarPedido(){
    const cliente = this.clientes.find(c => c.id.toString() === this.clienteSelecionadoId);
    const produtos = this.produtos.filter(p=> this.produtoSelecionadoId.includes(p.id.toString()));

    if(!cliente || produtos.length===0) return;
    const pedido = new Pedido(this.dadosService.getPedidos().length+1, cliente, produtos, this.desconto);

    this.dadosService.adicionarPedido(pedido);


    this.clienteSelecionadoId = "";
    this.produtoSelecionadoId = [];
    this.desconto = 0;
  }
}
