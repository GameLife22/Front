import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { FicheProduitComponent } from './produit/fiche-produit/fiche-produit.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import {GestionCompteComponent} from "./gestion-compte/gestion-compte.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: HomeComponent },
  { path : "login", component : LoginComponent},
  { path : "inscription", component : InscriptionComponent},
  { path: "produit/all", component : ProduitDetailComponent},
  { path : "produit/:id", component : FicheProduitComponent},
  { path : "produit", component: RechercherProduitComponent},
  { path : "gestioncompte", component: GestionCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
