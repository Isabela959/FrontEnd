import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  genero: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparDados () {
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.genero = "";
    this.idade = null;
    this.profissao = "";
  }

  // método para validar os campos do formulário

  /*
  validarCampos() {
    if (
      this.nome === "" ||
      this.email === "" ||
      this.telefone === "" ||
      this.genero === "" ||
      this.idade === null ||
      this.profissao === ""
    ) {}
    return alert("Todos os campos devem ser preenchidos!")
  }
  */

  validarFormulario(): string[] {
  const erros: string[] = [];
    // Validação dos campos
  if(!this.nome.trim()) {
    erros.push("O nome é obrigatório.");
    }
    // Validação do email
    if(!this.email.trim()) {
    erros.push("O email é obrigatório");
    } else if(!this.email.includes("@")) {
      erros.push("Email inválido");
    }
    return erros;
  }

    enviarFormulario() {
      const erros = this.validarFormulario();
      if (erros.length > 0) {
        alert("Erros no Formulário: " + erros.join(", "));
      return;
    }
    this.limparDados();
    alert("Formulário enviado com sucesso");
  }
}

