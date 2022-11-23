import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatRadioModule} from '@angular/material/radio'
import { MatInputModule} from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProduitDetailComponent,
    InscriptionComponent,
    RechercherProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
