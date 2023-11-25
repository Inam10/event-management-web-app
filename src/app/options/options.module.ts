import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEventComponent } from './book-event/book-event.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    BookEventComponent,
    ProfileComponent
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
