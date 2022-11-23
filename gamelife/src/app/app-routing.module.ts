import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';

const routes: Routes = [
  { path : "login", component : LoginComponent},
  { path : "inscription", component : InscriptionComponent},
  { path: "produit/all", component : ProduitDetailComponent},
  { path : "produit", component: RechercherProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
