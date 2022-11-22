import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';

const routes: Routes = [
  { path : "login", component : LoginComponent},
  { path: "produit/all", component : ProduitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
