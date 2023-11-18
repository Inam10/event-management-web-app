import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetComponent } from './forot/forgot.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    ResetComponent
  ]
})
export class AuthModule { }
