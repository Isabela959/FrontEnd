import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vagas.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit{
  //atributos
  public vaga: Vaga = new Vaga(0, "", "", "", 0); // rastrear os dados do Formulário
  // vetor para armazenar as informações do DB
  public vagas:Vaga[] = [];

  constructor(private _vagasService: VagaService){} // serviço é criado ao ser construído o objeto

  ngOnInit(): void {
    this.listarVagas();
  }

  //colocar as vagas na tabela
  listarVagas(){
    this._vagasService.getVagas().subscribe(
      (retornoVaga) => {this.vagas = retornoVaga.map(
        (item)=> Vaga.fromMap(item)
      );}
    )
  }

  //listar vaga única
  listarVagaUnica(vaga:Vaga){
    this.vaga = vaga;
  }

  //cadastrar nova Vaga
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, "", "", "", 0); // limpa o formulário
        this.listarVagas();
      },
      (err) => {console.error("Erro ao Cadastrar Vaga", err);}
    );
  }

  //atualizar nova Vaga
  atualizar(id:number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, "", "", "", 0); // limpa o formulário
        this.listarVagas();
      },
      (err) => {console.error("Erro ao Atualizar Vaga", err);}
    )
  }

  //deletar vaga
  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      () => { this.listarVagas();},
      (err) => {console.error("Erro ao Deletar Vaga", err)}
    );
  }

}
