import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  commandeModel: Commande;
  prixTotal: number;

  constructor(private commandeService: CommandeService) { }


  ngOnInit(): void {
    // Appeler le service pour récupérer les détails de la commande
    this.commandeService.getCommandeDetails().subscribe(commande => {
      this.commandeModel = commande;
    });
  }

  
}
