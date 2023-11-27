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
eventsData :any;
  constructor(private eventDeleteService : OptionsService, private router: Router, private authService: AuthService, private showEventData :OptionsService)  {
    this.showEventData.eventData().subscribe((data)=>{
      this.eventsData=data;

    })
  }
  // deleteEvent(userData : any)  {
  //   this.eventDeleteService.deleteEvent(userData).subscribe(
  //     response =>{
  //       console.log('delete Event successfully', response);
  //       this.router.navigate(['dashboard']);

  //     },
  //     error =>{
  //       console.log('failed to delete the event' , error);
  //     }
  //   )
    
  // }

  gotoAddevent(){
    this.router.navigate(['/options/book-event'])
  }

  gotoHome(){
    this.router.navigate(['/'])
  }
  gotoProfile(){
    this.router.navigate(['/profile'])
  }

  logout() {
    this.router.navigate(['auth/signin'])
}
}
