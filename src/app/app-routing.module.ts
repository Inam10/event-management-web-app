import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';

const routes: Routes = [
  {
    path: 'signup',
    component : SignupComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path : 'reset',
    component: ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
