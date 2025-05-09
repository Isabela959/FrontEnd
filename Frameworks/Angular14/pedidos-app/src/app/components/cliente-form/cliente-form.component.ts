import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  nome = "";

  constructor(private dadoService: DadosService){}

  adicionarCliente(){
    const cliente = new Cliente(this.dadoService.getClientes().length+1, this.nome)
    this.dadoService.adicionarCliente(cliente);
    this.nome = "";
  }

}
