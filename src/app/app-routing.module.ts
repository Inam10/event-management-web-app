import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForgetComponent } from './auth/forgot/forgot.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { HomeSectionComponent } from './main/home-section/home-section.component';

const routes: Routes = [
  {
    path:'',
    component: HomeSectionComponent
  },
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
  },
  {
    path : 'forgot',
    component : ForgetComponent
  },
  {
    path: 'dashboard',
    component : UserdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
