import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEventComponent } from './book-event/book-event.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BookEventComponent
  ]
})
export class OptionsModule { }
