import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router : Router){}

  gotoLogin(){
    this.router.navigate(['auth/login']);
  }

  gotosignup(){
    this.router.navigate(['user/signup']);
  }
  gotoHome(){
    this.router.navigate(['/'])
  }
}
