import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }

  private  apiUrlLogIn = 'http://localhost:3000/users/signin'
  private apiUrlForgot = 'http://localhost:3000/users/forgotPassword';


  constructor( private http : HttpClient )  { }

  login(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogIn, userData);
  }

  sendResetLink(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrlForgot, { email });
  }
}
