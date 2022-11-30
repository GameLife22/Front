import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatRadioModule} from '@angular/material/radio'
import { MatInputModule} from '@angular/material/input'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { FicheProduitComponent } from './produit/fiche-produit/fiche-produit.component';
import { FooterComponent } from './partage/footer/footer.component';
import { HeaderComponent } from './partage/header/header.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProduitDetailComponent,
    InscriptionComponent,
    RechercherProduitComponent,
    FicheProduitComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
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
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    Ng2SearchPipeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
