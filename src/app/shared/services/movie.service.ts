import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImovieResponse, IsingleMovie } from '../components/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
API_CONFIG =environment.apiConFig;
POPULAR_MOVIE_URL:string = `${this.API_CONFIG.baseUrl}/movie/popular`
  constructor(
    private _http:HttpClient
  ) { }

  fetchMovies(page:number):Observable<ImovieResponse<IsingleMovie>>{
    let params = new HttpParams()
                  .set("api_key",this.API_CONFIG.apiKey)
                  .set("page",page)
                  .set("defaultLanguage",this.API_CONFIG.defaultLanguage)
                
    return this._http.get<ImovieResponse<IsingleMovie>>(this.POPULAR_MOVIE_URL,{
      params:params
    })
  }
  getMovieById(movieId:string):Observable<IsingleMovie>{
    let MOVIE_URL =`${this.API_CONFIG.baseUrl}/movie/${movieId}`
    let params =new HttpParams()
                .set("api_key",this.API_CONFIG.apiKey)
                .set("defaultLanguage",this.API_CONFIG.defaultLanguage)
  return this._http.get<IsingleMovie>(MOVIE_URL,{params})
  }
}
