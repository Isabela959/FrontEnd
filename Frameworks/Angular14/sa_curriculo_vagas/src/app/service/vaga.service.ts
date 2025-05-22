import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  //atributo -> localhost
  private apiUrl = "http://localhost:3011/vagas"; // Caminho para arquivo Json

  constructor(private http: HttpClient) { }

  // Comunicação CRUD da API ( get / post / put / delete )

  //obter a lista de vagas (GET)
  getVagas(): Observable<Vaga[]>{ //permite a conexão das informações do banco com o Front
    return this.http.get<Vaga[]>(this.apiUrl); //conexões direto com a API httpClient
  }

  //Cadastrar (POST)

cadastrarVaga(vaga: Vaga): Observable<Vaga[]>{
  return this.http.post<Vaga[]>(this.apiUrl, vaga);
}

  //Atualizar (PUT)

atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]>{
  const urlAtualizar = `${this.apiUrl}/${id}`;
  return this.http.put<Vaga[]>(urlAtualizar, vaga);
}

  //Deletar (DELETE)
  removerVaga(id:any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }

}
