import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnyForUntypedForms } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FavouriteMoviesService {
  constructor(private httpClient: HttpClient) {}

  get: string ='http://localhost:5555/favourites/favourite-movies/'+sessionStorage.getItem('username');
  delete: string = 'http://localhost:5555/favourites/favourite-movie/';

  token: string = sessionStorage.getItem('token');
  requestHeader = new HttpHeaders().set('Authorization', 'Bearer' + this.token);

  getMovies() {
    console.log(this.token)
    return this.httpClient.get<any>(this.get);
  }
  deleteMovie(movie: any) {
    return this.httpClient.delete<any>(this.delete + movie);
  }
}
