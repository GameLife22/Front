import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {GameModel} from "../../model/game.model";
import {PageModel} from "../../model/page.model";
import {SearchGameModel} from "../../model/searchGame.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  public getGameByName(name: string): Observable<SearchGameModel[]>  {
    return this.http.get<SearchGameModel[]>(this.baseUrl+`api/v1/games/search?name=${name}`)
  }

  public getGames(page: number, size: number): Observable<PageModel<GameModel>>{
    return this.http.get<PageModel<GameModel>>(this.baseUrl + `api/v1/games?page=${page}&size=${size}`);
  }

  public getGamesById(gameId: string): Observable<GameModel> {
    return this.http.get<GameModel>(this.baseUrl + `api/v1/games/${gameId}`);
  }
}
