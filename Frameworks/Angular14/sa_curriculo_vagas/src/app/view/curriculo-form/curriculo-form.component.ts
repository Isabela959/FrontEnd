import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(
    0, '', '', '', '', '', '', '', '', ''
  );

  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) { }

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (retornoCurriculo) => {
        this.curriculos = retornoCurriculo.map(item => Curriculo.fromMap(item));
      }
    );
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrar() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao cadastrar currículo', err);
      }
    );
  }

  atualizar(id: number) {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao atualizar currículo', err);
      }
    );
  }

  excluir(id: number) {
    this._curriculoService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao excluir currículo', err);
      }
    );
  }
}
