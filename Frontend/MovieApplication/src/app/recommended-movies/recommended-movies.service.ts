import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommendedMoviesService {

  constructor(private httpClient:HttpClient) { }

get:string="https://api.themoviedb.org/3/movie/550/recommendations?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=2";
post:string="http://localhost:5555/favourites/favourite-movies";
get_2:string="https://api.themoviedb.org/3/movie/552/recommendations?api_key=71d494e529a19de6b6ca6b859c1ecd63&language=en-US&page=2";

recommendedMovies()
  {
    return this.httpClient.get<any>(this.get);
}
recommendedMoviesPage2()
{
  return this.httpClient.get<any>(this.get_2);

}
postMovies(data:any)
{
  return this.httpClient.post<any>(this.post,data);
}

}
