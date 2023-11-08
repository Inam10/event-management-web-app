import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUrl = 'http:localhost:3000/users/signin'
  singnupUrl = 'http:localhost:3000/users/signup'

  constructor(private http : HttpClient) { }

 loginusers(data :any){
      return this.http.post(this.loginUrl , data)
 }
 signupusers(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', data)
  }

}
