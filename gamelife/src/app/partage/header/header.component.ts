import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  token : any = sessionStorage.getItem("JWT_TOKEN");
  tokenDec = this.getDecodedAccessToken(this.token);
  nom : string;
  prenom : string;


  constructor(private service : UtilisateurService) {}

  ngOnInit(): void {
    if(!!this.token){
      this.infos()
    }
  }
  deconnexion(): void{
    sessionStorage.removeItem("JWT_TOKEN");
    window.location.reload();
  }
  infos():void{
    this.service.getUserById(this.tokenDec.user).subscribe(resp => {
      console.log(resp)
      this.nom = resp.nom;
      this.prenom = resp.prenom;
    })
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }


}
