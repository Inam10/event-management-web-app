import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-detele-update',
  templateUrl: './detele-update.component.html',
  styleUrls: ['./detele-update.component.css']
})
export class DeteleUpdateComponent {
  userData: any;
  eventsData: any;
  deleteCurrentEvent: any;
  constructor(private router: Router, private showEventData: OptionsService, private eventDeleteService: OptionsService) {
    this.showEventData.eventData().subscribe((data) => {
      this.eventsData = data;
    }
    )
  }

  // deleteEvent(id: number): void {
  //   this.eventDeleteService.deleteEventById(id)
  //     .subscribe(
  //       () => {
  //         console.log('Data deleted successfully');
  //         // Perform additional actions if needed after successful deletion
  //       },
  //       (error) => {
  //         console.error('Error deleting data:', error);
  //       }
  //     );
  // }


  deleteEvent(action: any, deleteCurrentEvent: any) {
    console.info("deleteCurrentEvent", deleteCurrentEvent)
    this.eventDeleteService
      .deleteEventById(`${deleteCurrentEvent._id}`)
      .subscribe((response) => {
        console.info("deleteCurrentStaffRow._id", deleteCurrentEvent._id)
        console.log(response)
      });
  }
}
