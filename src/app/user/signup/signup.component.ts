import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router : Router , private signup : UserService){}

  gotoLogin(){
    this.router.navigate(['/login'])
  }
  singupuser(data :any){
    console.log("result:" )
    this.signup.signupusers(data).subscribe((result)=>{
      console.log(data);
      
    })
    
  }

}
