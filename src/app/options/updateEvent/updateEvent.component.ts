import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-detele-update',
  templateUrl: './updateEvent.component.html',
  styleUrls: ['./updateEvent.component.css']
})
export class UpdateComponent {

  eventsData: any;
  deleteCurrentEvent: any;
  event: any;

  constructor(private showEventData: OptionsService, private eventDeleteService: OptionsService) { }
  ngOnInit() {
    this.GeteventById()
  }



  GeteventById() {
    this.showEventData.eventData().subscribe(
      response => {
        this.eventsData = response;
      })
  }


  deleteEvent(deleteCurrentEvent: any) {
    console.info("deleteCurrentEvent", deleteCurrentEvent)
    this.eventDeleteService
      .deleteEventById(`${deleteCurrentEvent._id}`)
      .subscribe((response) => {
        console.info("deleteCurrentStaffRow._id", deleteCurrentEvent._id)
        console.log(response)
        this.GeteventById()
      });
  }

  setDeleteEvent(event: any) {
    console.log('Selected event for deletion:', event);
    this.deleteEvent(event);

  }
}
