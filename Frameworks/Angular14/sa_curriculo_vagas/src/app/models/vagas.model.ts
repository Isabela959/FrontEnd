export class Vaga {
  // //atributos
  // id:number = 0;
  // nome: string = "";
  // foto: string = "";
  // descricao: string = "";
  // salario: number = 0

  // constructor(id: number, nome: string, foto:string, descricao:string, salario:number){
  //     this.id = id;
  //     this.nome = nome;
  //     this.foto = foto;
  //     this.descricao = descricao;
  //     this.salario = salario;
  // }

  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number

  ) {}

  // //métodos de acesso getter and setter

  // getId():number {
  //   return this.id;
  // }

  // toMap -> converte obj -> BD
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario
    }
  }

  //fromMap() BD -> obj

  static fromMap(map: any): Vaga {
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    );
  }
}
