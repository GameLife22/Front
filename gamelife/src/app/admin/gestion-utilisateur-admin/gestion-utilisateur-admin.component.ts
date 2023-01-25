import { Component, OnInit } from '@angular/core';
import {
  GestionUtilisateurAdminService
} from "../../services/admin/gestion-utilisateur-admin/gestion-utilisateur-admin.service";
import {GetUsersModel} from "../../model/get.users.model";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-gestion-utilisateur-admin',
  templateUrl: './gestion-utilisateur-admin.component.html',
  styleUrls: ['./gestion-utilisateur-admin.component.scss']
})
export class GestionUtilisateurAdminComponent implements OnInit {

  users : GetUsersModel []

  constructor(private gestionUtilisateur : GestionUtilisateurAdminService,
              private utilisateurService : UtilisateurService) { }

  ngOnInit(): void {
    this.gestionUtilisateur.getAllUsers().subscribe({
     next : (resultat) =>{
       this.users = resultat
     },
      error: (e) => console.error(e, "Erreur GetAllUsers")
   })
  }

  changerEtatUser(newEtat : number , id : number){
    this.utilisateurService.updateEtat(id,newEtat).subscribe()
  }

}
