import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

post:string="http://localhost:7777/user/auth/login";


login(data:any)
{
  console.log(data)
  return this.httpClient.post<any>(this.post,data);
}

}
