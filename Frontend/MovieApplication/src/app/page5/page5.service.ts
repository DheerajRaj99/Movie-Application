import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page5Service {

  constructor(private httpClient:HttpClient) { }
  get_4:string="https://api.themoviedb.org/3/movie/popular?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=5";
  post:string="http://localhost:5555/favourites/favourite-movies";


recentlyAddedMovies()
{
    return this.httpClient.get<any>(this.get_4);
}
postMovies(data:any)
{
  return this.httpClient.post<any>(this.post,data);
}

}
