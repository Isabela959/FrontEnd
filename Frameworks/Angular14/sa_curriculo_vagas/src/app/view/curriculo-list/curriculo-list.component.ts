import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit {
  // Array onde serão armazenados os currículos recebidos do service
  public curriculos: Curriculo[] = [];

  // Injeta o serviço de currículos no componente
  constructor(private _curriculoService: CurriculoService) { }

  // Método chamado automaticamente quando o componente é carregado
  ngOnInit(): void {
    this.listarCurriculos();
  }

  // Método que chama o serviço para obter todos os currículos do banco
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (retornoCurriculo) => {
        // Converte cada item recebido em um objeto Curriculo
        this.curriculos = retornoCurriculo.map(item => Curriculo.fromMap(item));
      }
    );
  }
}
