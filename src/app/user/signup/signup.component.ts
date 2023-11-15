import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userData = {
    fullName: '',
    email: '',
    phone:'',
    password: '',
    confimPassword: ''
  };

  constructor(private router : Router , private userService : UserService){}

  gotoLogin(){
    this.router.navigate(['/login'])
  }
  singupuser(userData : any)  {
    this.userService.signupusers(userData).subscribe(
      response =>{
        console.log('signup successfull', response);
      },
      error =>{
        console.log('signup failed' , error);
      }
    )
    
  }

}
