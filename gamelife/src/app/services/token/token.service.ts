import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

  getUserId(): string | null {
    // Récupérer le token JWT depuis le stockage de session
    const token = this.getToken();
   // console.log('Token JWT récupéré :', token);

    // Vérifier si le token existe
    if (token) {
      try {
        // Diviser le token en ses parties: en-tête, corps et signature
        const tokenParts = token.split('.');

        // Vérifier si le token a le bon format
        if (tokenParts.length !== 3) {
         // console.error("Le token JWT n'a pas le bon format.");
          return null;
        }

        // Extraire la partie du corps du token qui est encodée en base64
        const encodedPayload = tokenParts[1];

        // Décoder la partie du corps du token à partir de l'encodage base64
        const decodedPayload = atob(encodedPayload);
      //  console.log('Payload décodé du token :', decodedPayload);

        // Analyser la partie décodée du corps du token en tant qu'objet JSON
        const tokenPayload = JSON.parse(decodedPayload);
       // console.log('Payload JSON du token :', tokenPayload);

        // Vérifier si le payload du token contient l'ID de l'utilisateur
        if (tokenPayload && tokenPayload.jti) {
          // Retourner l'ID de l'utilisateur
          return tokenPayload.jti;
        } else {
       //   console.error("ID de l'utilisateur non trouvé dans le payload du token.");
          return null;
        }
      } catch (error) {
       // console.error("Erreur lors de l'extraction de l'ID de l'utilisateur à partir du token:", error);
        return null;
      }
    } else {
      // Retourner null si aucun token n'est présent ou s'il est invalide
   //   console.error("Aucun token JWT n'a été trouvé.");
      return null;
    }
  }




  saveToken(token : string){
    sessionStorage.setItem('JWT_TOKEN',token)
  }

  isLogged() : boolean{
    const token = sessionStorage.getItem('JWT_TOKEN')
    return !! token
  }

  clearToken(){
    sessionStorage.removeItem('JWT_TOKEN')
    this.router.navigate(['/'])
  }

  getToken() : string | null{
    return sessionStorage.getItem('JWT_TOKEN');
  }



}
