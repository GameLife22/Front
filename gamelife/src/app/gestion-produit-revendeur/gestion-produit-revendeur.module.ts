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
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatLine, MatOption} from "@angular/material/core";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator} from "@angular/material/paginator";
import {AddProduitComponent} from "../revendeur/add-produit/add-produit.component";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";


const routes: Routes = [
  { path: '', component: GestionProduitRevendeurComponent },
  { path: 'produits', component: TousProduitsComponent },
  { path: 'mes-produits', component: MesProduitsComponent },
  { path: 'ajouter-produit', component: AddProduitComponent }

];
@NgModule({
  declarations: [
    GestionProduitRevendeurComponent,
    TousProduitsComponent,
    MesProduitsComponent,
    AddProduitComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        NgxPaginationModule,
        MatToolbar,
        MatIcon,
        MatNavList,
        MatListItem,
        MatLine,
        MatGridList,
        MatGridTile,
        MatPaginator,
        MatFormField,
        ReactiveFormsModule,
        MatSelect,
        MatOption,
        MatInput,
        FormsModule
    ]
})
export class GestionProduitRevendeurModule { }
