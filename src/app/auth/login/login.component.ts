import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData = {
    email: '',
    password: ''
  };

  constructor( private router : Router , private authService : AuthService ){}

  gotoforgot(){
    this.router.navigate(['/forgot'])
  }

  gotosignup(){
    this.router.navigate(['/signup']);
  };

  login(): void {
    this.authService.login(this.userData)
      .subscribe(
        response => {
          console.log('Login successful!', response);
        },
        error => {
          console.error('Login failed!', error);
        }
      );
  }

}
