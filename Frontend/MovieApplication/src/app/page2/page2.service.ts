import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Page2Service {

  constructor(private httpClient:HttpClient) { }

  get_2:string="https://api.themoviedb.org/3/movie/top_rated?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=1";
  post:string="http://localhost:5555/favourites/favourite-movies";



  allTopRatedMovies()
  {
    return this.httpClient.get<any>(this.get_2);

}
postMovies(data:any)
{
  return this.httpClient.post<any>(this.post,data);
}
}
