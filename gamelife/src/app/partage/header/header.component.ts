import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  token : any = sessionStorage.getItem("JWT_TOKEN");
  nom = this.getDecodedAccessToken(this.token).nom;
  prenom = this.getDecodedAccessToken(this.token).prenom;


  constructor() { }

  ngOnInit(): void {
  }
  deconnexion(): void{
    sessionStorage.removeItem("JWT_TOKEN");
    window.location.reload();
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
