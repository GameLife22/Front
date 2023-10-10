import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {

  public isUserActive: BehaviorSubject<number> = new BehaviorSubject<number>(0);

}
