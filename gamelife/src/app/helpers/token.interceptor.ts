import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    if(token !== null){
     let reqClone =  request.clone({
       headers : request.headers.set('Authorization',token)
     })
      return next.handle(reqClone);
    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass : TokenInterceptor,
  multi : true
}
