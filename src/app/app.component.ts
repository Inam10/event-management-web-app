import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-management-web-app';

  constructor(private router : Router){}

  gotoLogin(){
    this.router.navigate(['/login']);
  }

  gotosignup(){
    this.router.navigate(['/signup']);
  }
  gotoHome(){
    this.router.navigate(['/'])
  }

}
