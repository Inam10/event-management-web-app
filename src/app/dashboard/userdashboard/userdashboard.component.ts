import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  events = []
userData: any;

  constructor(private eventDeleteService : OptionsService, private router: Router, private authService: AuthService)  {}
  deleteEvent(userData : any)  {
    this.eventDeleteService.deleteEvent(userData).subscribe(
      response =>{
        console.log('delete Event successfully', response);
        this.router.navigate(['/data/dashboard']);

      },
      error =>{
        console.log('failed to delete the event' , error);
      }
    )
    
  }

  gotoAddevent(){
    this.router.navigate(['/options/book-event'])
  }

  gotoHome(){
    this.router.navigate(['/'])
  }

  logout() {
    this.router.navigate(['auth/signin'])
}
}
