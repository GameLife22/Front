import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorProvider} from "./helpers/token.interceptor";
import { FicheProduitComponent } from './produit/fiche-produit/fiche-produit.component';
import { FooterComponent } from './partage/footer/footer.component';
import { HeaderComponent } from './partage/header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import {GestionCompteComponent} from "./gestion-compte/gestion-compte.component";
import { PaimentComponent } from './paiment/paiment.component';
import {NgxPayPalModule} from "ngx-paypal";
import {AngularSvgIconModule} from "angular-svg-icon";
import { MotDePasseOublieComponent } from './login/mot-de-passe-oublie/mot-de-passe-oublie.component';
import { ResetMotDePasseComponent } from './login/reset-mot-de-passe/reset-mot-de-passe.component';
import { ValidationInscriptionComponent } from './validation-inscription/validation-inscription.component';
import { ActivationCompteComponent } from './activation-compte/activation-compte.component';
import { PanierComponent } from './panier/panier.component';


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
    GestionCompteComponent,
    InternalServerComponent,
    NotFoundComponent,
    PaimentComponent,
    MotDePasseOublieComponent,
    ResetMotDePasseComponent,
    ValidationInscriptionComponent,
    ActivationCompteComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxPayPalModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
