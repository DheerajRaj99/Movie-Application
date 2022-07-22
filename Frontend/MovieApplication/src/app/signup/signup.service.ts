import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  post:string="http://localhost:7777/user/auth/register";

register(data:any)
{
  console.log('from service'+data)
  return this.httpClient.post<any>(this.post,data);
}


}
