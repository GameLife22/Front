import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';

  constructor(private router: Router) { }

  /**
   * Cette méthode permet d'identifier le status de l'erreur et de gérer cette erreur
   * @param error : HTTP Response Status
   * @author: Fabien
   */  
  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    else if (error.status === 404) {
      this.handle404Error(error)
    }
    else {
      this.handleOtherError(error);
    }
  }

  /**
   * Cette méthode permet de rediriger vers une page pour gérer une erreur côté serveur (500 Internal Server Error)
   * @param error: HTTP Response Status
   * @author: Fabien
   */
  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  /**
   * Cette méthode permet de rediriger vers une page pour gérer un erreur côté client (404 Not found)
   * @param error : HTTP Response Status
   * @author: Fabien
   */
  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  /**
   * Cette méthode permet de rediriger vers une page pour gérer un erreur
   * @param error : HTTP Response Status
   * @author: Fabien
   */
  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }

  /**
   * Cette méthode permet de créer un message d'erreur
   * @param error HTTP Response Status
   * @author: Fabien
   */
  private createErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
