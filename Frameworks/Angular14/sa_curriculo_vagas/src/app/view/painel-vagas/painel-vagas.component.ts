import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vagas.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit{
  public vaga: Vaga = new Vaga (0,"", "", "", 0);
  //rastrear os dados da API
  public vagas: Vaga[] = [];
  // ARMAZENAR AS VAGAS DA API

  constructor(private _vagasService: VagaService){}
  //estabelece o serviço de busca no servidor

  ngOnInit(): void {
    this.listarVagas();
  }

  //listar todas as vagas //GET
  listarVagas() {
    //Lista as vagas do servidor usando o serviço 'VagaService
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  //lista apenas uma única vaga //PUT
  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga;
  }

  //cadastrar //POST
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, "", "", "", 0); //limpa o formulário
        this.listarVagas(); //atualiza a lista
      }
    );
  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        //Após atualizar
        this.vaga = new Vaga(0, "", "", "", 0); //limpa o formulário
        this.listarVagas(); //atualiza a lista
      },
      (err) => {
        console.error("Erro ao Atualizar", err);
      }
    );
  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, "", "", "", 0); //limpa o formulário
        this.listarVagas(); //atualiza a lista
      },
      (err) => {
        console.error("Erro ao Excluir", err);
      }
    );
  }

}
