import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';

const routes: Routes = [
  { path : "login", component : LoginComponent},
  { path : "inscription", component : InscriptionComponent},
  { path : "produit", component: RechercherProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
