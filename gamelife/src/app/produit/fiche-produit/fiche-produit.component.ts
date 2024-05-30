import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitModel } from 'src/app/model/produit.model';
import { ErrorHandlerService } from 'src/app/partage/services/error-handler.service';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
})
export class FicheProduitComponent implements OnInit {
  errorMessage: string = '';

  id : string | any;
  produit : ProduitModel;

  constructor(private activatedRoute : ActivatedRoute, private produitService : ProduitService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.produitService.recupererProduitParId(this.id)
    .subscribe({
      next: (produit) => {
        this.produit = produit;
      }
    });
  }
}
