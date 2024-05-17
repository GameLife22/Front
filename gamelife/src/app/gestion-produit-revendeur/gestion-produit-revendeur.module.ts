import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GestionProduitRevendeurComponent} from "../revendeur/gestion-produit-revendeur/gestion-produit-revendeur.component";
import {TousProduitsComponent} from "../revendeur/tous-produits/tous-produits.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MesProduitsComponent} from "../revendeur/mes-produits/mes-produits.component";
import {MatButtonModule} from "@angular/material/button";
import {NgxPaginationModule} from "ngx-pagination";


const routes: Routes = [
  { path: '', component: GestionProduitRevendeurComponent },
  { path: 'produits', component: TousProduitsComponent },
  { path: 'mes-produits', component: MesProduitsComponent }

];
@NgModule({
  declarations: [
    GestionProduitRevendeurComponent,
    TousProduitsComponent,
    MesProduitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule
  ]
})
export class GestionProduitRevendeurModule { }
