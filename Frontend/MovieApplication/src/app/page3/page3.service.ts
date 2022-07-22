import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page3Service {

  constructor(private httpClient:HttpClient) { }
  post:string="http://localhost:5555/favourites/favourite-movies";
  get_3:string="https://api.themoviedb.org/3/movie/popular?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=2";

  postMovies(data:any)
{
  return this.httpClient.post<any>(this.post,data);
}
popularMovies()
{
    return this.httpClient.get<any>(this.get_3);
}
}
