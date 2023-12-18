import { Component, OnInit } from '@angular/core';
import { PanierModel } from '../model/panier.model';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  paniers: PanierModel[];

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.getPaniers();

  }

  getPaniers(): void {
    this.panierService.getAllPaniers().subscribe((paniers) => {
      this.paniers = paniers;
    });
  }

}
