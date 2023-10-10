import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login/login.component';
import { FicheProduitComponent } from './produit/fiche-produit/fiche-produit.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';

import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { GestionCompteComponent } from "./gestion-compte/gestion-compte.component";
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { PaimentComponent } from "./paiment/paiment.component";
import { MotDePasseOublieComponent } from "./login/mot-de-passe-oublie/mot-de-passe-oublie.component";
import { ResetMotDePasseComponent } from "./login/reset-mot-de-passe/reset-mot-de-passe.component";

import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {ValidationInscriptionComponent} from "./validation-inscription/validation-inscription.component";
import {ActivationCompteComponent} from "./activation-compte/activation-compte.component";
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: HomeComponent },
  { path : "login", component : LoginComponent},
  { path : "inscription", component : InscriptionComponent},
  {path :  "paiment", component: PaimentComponent},
  { path: "produit/all", component : ProduitDetailComponent},
  { path : "produit/:id", component : FicheProduitComponent},
  { path : "produit", component: RechercherProduitComponent},
  { path : "gestioncompte", component: GestionCompteComponent},
  { path : "motdepasseoublie" , component : MotDePasseOublieComponent},
  { path : "resetmotdepasse" , component : ResetMotDePasseComponent},
  { path : "admin/login" , component : AdminLoginComponent},
  {path :  "validationinscription", component : ValidationInscriptionComponent},
  { path : "activationcompte" , component : ActivationCompteComponent},
  { path : "admin/home", component : HomeAdminComponent},


  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
