import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import {TokenInterceptor, TokenInterceptorProvider} from "./helpers/token.interceptor";
import {MatSelectModule} from "@angular/material/select";
import { FicheProduitComponent } from './produit/fiche-produit/fiche-produit.component';
import { FooterComponent } from './partage/footer/footer.component';
import { HeaderComponent } from './partage/header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {GestionCompteComponent} from "./gestion-compte/gestion-compte.component";
import { PaimentComponent } from './paiment/paiment.component';
import {NgxPayPalModule} from "ngx-paypal";
import {AngularSvgIconModule} from "angular-svg-icon";
import { MotDePasseOublieComponent } from './login/mot-de-passe-oublie/mot-de-passe-oublie.component';
import { ResetMotDePasseComponent } from './login/reset-mot-de-passe/reset-mot-de-passe.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ValidationInscriptionComponent } from './validation-inscription/validation-inscription.component';
import { ActivationCompteComponent } from './activation-compte/activation-compte.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { GestionUtilisateurAdminComponent } from './admin/gestion-utilisateur-admin/gestion-utilisateur-admin.component';


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
    AdminLoginComponent,
    ValidationInscriptionComponent,
    ActivationCompteComponent,
    HomeAdminComponent,
    GestionUtilisateurAdminComponent,
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
    MatSelectModule,
    FormsModule,
    MatSelectModule,
    NgxPayPalModule,
    AngularSvgIconModule,

  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
