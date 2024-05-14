import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GestionProduitRevendeurComponent} from "../revendeur/gestion-produit-revendeur/gestion-produit-revendeur.component";
import {TousProduitsComponent} from "../revendeur/tous-produits/tous-produits.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  { path: '', component: GestionProduitRevendeurComponent },
  { path: 'produits', component: TousProduitsComponent }
];
@NgModule({
  declarations: [
    GestionProduitRevendeurComponent,
    TousProduitsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatCardModule
  ]
})
export class GestionProduitRevendeurModule { }
