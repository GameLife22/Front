import { Component, OnInit } from '@angular/core';
import { GestionUtilisateurAdminService } from "../../services/admin/gestion-utilisateur-admin/gestion-utilisateur-admin.service";
import {GetUsersModel} from "../../model/get.users.model";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {ActiveUserService} from "../../services/admin/gestion-utilisateur-admin/active-user/active-user.service";

@Component({
  selector: 'app-gestion-utilisateur-admin',
  templateUrl: './gestion-utilisateur-admin.component.html',
  styleUrls: ['./gestion-utilisateur-admin.component.scss']
})
export class GestionUtilisateurAdminComponent implements OnInit {

  users : GetUsersModel []
  isUserActive : number
  constructor(private gestionUtilisateur : GestionUtilisateurAdminService,
              private utilisateurService : UtilisateurService,
              private activeUserService : ActiveUserService) {

    this.activeUserService.isUserActive.subscribe(value => {
      this.isUserActive = value
    })


  }

  ngOnInit(): void {
    this.gestionUtilisateur.getAllUsers().subscribe({
     next : (resultat) =>{
       this.users = resultat
     },
      error: (e) => console.error(e, "Erreur GetAllUsers")
   })
  }

  changerEtatUser(newEtat : number , id : number){
    this.utilisateurService.updateEtat(id,newEtat).subscribe({
      next(resp){
        if(resp.new_etat == 1 ){
          var el = document.getElementById("success")
          console.log(el)
          // @ts-ignore
          el.style.backgroundColor = "green";
        }
        else if(resp.new_etat == 0){
          var el = document.getElementById("danger")
          console.log(el)
          // @ts-ignore
          el.style.backgroundColor = "red";
        }
      }
    })
    this.activeUserService.isUserActive.next(newEtat)

  }

}
