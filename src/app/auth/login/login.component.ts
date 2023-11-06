import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router : Router){}

  gotoreset(){
    this.router.navigate(['/reset'])
  }

  gotosignup(){
    this.router.navigate(['/signup']);
  };

  loginuser(item : any){
    console.log(item);
  }

}
