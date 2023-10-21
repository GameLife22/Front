import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

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
    sessionStorage.getItem('JWT_TOKEN')
    return sessionStorage.getItem('JWT_TOKEN')
  }
}
