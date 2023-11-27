import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEventComponent } from './book-event/book-event.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DeteleUpdateComponent } from './detele-update/detele-update.component';



@NgModule({
  declarations: [
    BookEventComponent,
    ProfileComponent,
    DeteleUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BookEventComponent,
    ProfileComponent
  ]
})
export class OptionsModule { }
