import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router : Router , private userlogin : UserService ){}

  gotoreset(){
    this.router.navigate(['/reset'])
  }

  gotosignup(){
    this.router.navigate(['/signup']);
  };

  loginuser(data : any){
    this.userlogin.loginusers(data).subscribe((result)=>{
      console.log(data);
    })
  }

}
