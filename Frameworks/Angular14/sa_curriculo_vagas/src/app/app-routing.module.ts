import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';

// Importar os componentes que serão utilizados nas rotas
// Definir as rotas da aplicação
const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component: CurriculoListComponent},
  {path: "vagas", component: VagasComponent},
  {path: "painel-vagas", component: PainelVagasComponent},
  {path: "cadastrar-curriculo", component: CurriculoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
