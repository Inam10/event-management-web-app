import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForgetComponent } from './auth/forgot/forgot.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { HomeSectionComponent } from './main/home-section/home-section.component';
import { BookEventComponent } from './options/book-event/book-event.component';
import { AboutComponent } from './home/about/about.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProfileComponent } from './options/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component: HomeSectionComponent
  },
  {
    path: 'user/signup',
    component : SignupComponent
  },
  {
    path: 'auth/signin',
    component : LoginComponent
  },
  {
    path : 'auth/reset',
    component: ResetComponent
  },
  {
    path : 'auth/forgot',
    component : ForgetComponent
  },
  {
    path : 'options/book-event',
    component : BookEventComponent
  },
  {
    path: 'dashboard',
    component : UserdashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
