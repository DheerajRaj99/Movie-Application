import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  get:string="https://api.themoviedb.org/3/movie/popular?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=1";
  post:string="http://localhost:5555/favourites/favourite-movies";

  allMovies()
  {
    return this.httpClient.get<any>(this.get);

}

postMovies(data:any)
{
  return this.httpClient.post<any>(this.post,data);
}
}
