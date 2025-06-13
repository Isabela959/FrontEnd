import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  // Objeto para armazenar os dados do formulário, inicializado vazio
  public curriculo: Curriculo = new Curriculo(
    0, '', '', '', '', '', '', '', '', ''
  );

  // Lista que armazenará os currículos
  public curriculos: Curriculo[] = [];

  // Usa CurriculoService para comunicação com backend
  constructor(private _curriculoService: CurriculoService) { }

  // Método que roda quando o componente é inicializado
  ngOnInit(): void {
    this.listarCurriculos(); // Carrega a lista de currículos ao iniciar
  }

  // Busca todos os currículos via serviço e armazena na lista local
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (retornoCurriculo) => {
        this.curriculos = retornoCurriculo.map(item => Curriculo.fromMap(item));
      }
    );
  }

  // Carrega um currículo específico para edição
  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrar() {
    // Verifica se todos os campos estão preenchidos
    if (
      !this.curriculo.nome ||
      !this.curriculo.email ||
      !this.curriculo.telefone ||
      !this.curriculo.endereco ||
      !this.curriculo.resumo ||
      !this.curriculo.experiencia ||
      !this.curriculo.formacao ||
      !this.curriculo.idioma ||
      !this.curriculo.habilidades
    ) {
      alert("Todos os Campos Devem ser Preenchidos.");
      return;
    }

    //Valida se o email terminal com @gmail.com
    if (!this.curriculo.email.endsWith("@gmail.com")) {
      alert("Email Inválido");
      return;
    }

    // Se tudo passar pelas validações, ele cria o novo currículoacabei
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', '', '', '');
        this.listarCurriculos();
        alert("Currículo Cadastrado com Sucesso!");
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
