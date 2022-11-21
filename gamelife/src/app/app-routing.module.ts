import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : "login", component : LoginComponent},
  { path : "gestion-compte", component : GestionCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
