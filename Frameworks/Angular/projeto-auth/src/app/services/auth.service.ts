import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map,  Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3012/usuarios';
  private readonly CHAVE_AUTH = "usuarioLogado";

  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario:any):Observable<any>{
    //busca no banco de dados e verifica se o email já foi cadastrado
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios=>{
        if(usuarios.length>0){ // caso exista 
          // cria uma mensagem de err para sar tratada no try/catch
          return throwError (()=> new Error('Usuário já Cadastrado'));
        }else{ // caso não exista
          // cadastra o usuário no BD
          return this.http.post(this.apiUrl, usuario);
        }
      })
    ) 
  }

  login(credenciais: any): Observable<boolean>{
    // pega as credenciais do usuário (email e senha)
    return this.http.get<any[]>(
      //verifica no BD se email e senha foram encontrados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {
          if(usuarios.length>0){ // se foi encontrado
            // converte as informações de json para texto, e salva elas e a chave no LocalHost (cache do Navegador)
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            // retorna que o acesso foi permitido
            return true;
          }else{ // caso não encontrado
            //fazer um erro
            // retorno que meu usuário não está permitido o acesso
            return false;
          }
        })
      )
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticação do usuário
    this.router.navigate(['/home']); // redireciona para a página home
  }
    
  // verifica se o usuário já está logado (CHAVE_AUTH)
  estaAutenticado():boolean{
    // vou transformar uma variável do Tipo Texto em Boolean
    return !!localStorage.getItem(this.CHAVE_AUTH); // se existir a chave, retorna true, caso contrário, false
  }

  // pegar s informações do usuário no localStorage
  getUsuarioAtual(): any{
    // retorna as informações do usuário autenticado, que estão armazenadas no localStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}");
  }

}

