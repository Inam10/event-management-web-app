import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  events = []

  constructor(private eventDeleteService : OptionsService, private router: Router)  {}
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

  gotoDashboard(){
    this.router.navigate(['/options/book-event'])
  }

}
