import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }
  
  get:string="http://localhost:7777/user/auth/userinfo/"+sessionStorage.getItem('username');


  userDetails()
  {
    console.log(this.get)
    return this.httpClient.get<any>(this.get)
  }
}
