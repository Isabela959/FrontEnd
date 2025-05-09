import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent {

  //atributos
  pedidos: Pedido[];

  constructor(private dadosService: DadosService){
    this.pedidos = this.dadosService.getPedidos();
  }

  total(pedido: Pedido): number{
    return pedido.calcularTotal();
  }
}
