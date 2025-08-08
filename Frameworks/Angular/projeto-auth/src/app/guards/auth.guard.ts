import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{ // classe contrato obriga a iplementar o método canActivate

  constructor(private authService: AuthService, private router: Router){} // cria 2 objetos, o da classe AuthService e Router

  canActivate(): boolean{
    if(this.authService.estaAutenticado()){
      return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
}