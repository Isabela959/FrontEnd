import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { InternaComponent } from './pages/interna/interna.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "registro", component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path: "interna", component: InternaComponent, canActivate: [AuthGuard]}, //verifica, intercepta e decide
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
