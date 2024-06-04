import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercherProduitComponent } from './produit/rechercher-produit/rechercher-produit.component';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorProvider} from "./helpers/token.interceptor";
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
import { ValidationInscriptionComponent } from './validation-inscription/validation-inscription.component';
import { ActivationCompteComponent } from './activation-compte/activation-compte.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { AddToRevendeurDialogComponent } from './revendeur/add-to-revendeur-dialog/add-to-revendeur-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatList, MatListItem} from "@angular/material/list";
import {NgxPaginationModule} from "ngx-pagination";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgIconsModule } from '@ng-icons/core';
import { ionPerson, ionBasket  } from '@ng-icons/ionicons'

@NgModule({ declarations: [
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
        AddToRevendeurDialogComponent,
    ],
    bootstrap: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    NgIconsModule.withIcons({ionPerson, ionBasket}),
    AngularSvgIconModule, NgxPaginationModule, MatDialogClose, MatList, MatListItem, MatDialogActions, MatDialogContent, MatDialogTitle], providers: [TokenInterceptorProvider, provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()] })
export class AppModule { }
