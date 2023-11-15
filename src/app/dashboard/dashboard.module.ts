import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';



@NgModule({
  declarations: [
    UserdashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserdashboardComponent
  ]
})
export class DashboardModule { }
