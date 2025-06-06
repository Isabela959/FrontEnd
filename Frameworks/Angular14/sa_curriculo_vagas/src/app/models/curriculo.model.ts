// Será feito pelos alunos =)

// Classe Modelo do Currículo com seus atributos
export class Curriculo {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public telefone: string,
    public endereco: string,
    public resumo: string,
    public experiencia: string,
    public formacao: string,
    public idioma: string,
    public habilidades: string
  ) { }

  // Método que transforma o objeto Curriculo em um objeto simples (mapa)
  // Conjunto de pares chave-valor
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      resumo: this.resumo,
      experiencia: this.experiencia,
      formacao: this.formacao,
      idioma: this.idioma,
      habilidades: this.habilidades
    };
  }

  //fromMap() tranforma as informações do BD -> objeto
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.email,
      map.telefone,
      map.endereco,
      map.resumo,
      map.experiencia,
      map.formacao,
      map.idioma,
      map.habilidades
    );
  }
}
