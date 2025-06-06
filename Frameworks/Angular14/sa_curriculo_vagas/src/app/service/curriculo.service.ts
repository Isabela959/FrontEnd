// Comunicação com oo Banco de Dados

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  //atributo -> localhost
  private apiUrl = "http://localhost:3011/curriculos"; // Caminho para arquivo Json

  constructor(private http: HttpClient) { }

// Comunicação CRUD da API ( get / post / put / delete )

  //obter a lista de curriculos (GET)
  getCurriculos(): Observable<Curriculo[]>{ //permite a conexão das informações do banco com o Front
    return this.http.get<Curriculo[]>(this.apiUrl); //conexões direto com a API httpClient
  }

  //Cadastrar (POST)

cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]>{
  return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
}

  //Atualizar (PUT)

atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]>{
  const urlAtualizar = `${this.apiUrl}/${id}`;
  return this.http.put<Curriculo[]>(urlAtualizar, curriculo);
}

  //Deletar (DELETE)
  removerCurriculo(id:any): Observable<Curriculo[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }

}

