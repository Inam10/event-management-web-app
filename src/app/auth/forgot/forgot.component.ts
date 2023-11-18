import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgetComponent {

  email: string = '';
  constructor(private forgotPasswordService: AuthService){}

  sendResetLink(): void {
    this.forgotPasswordService.sendResetLink(this.email)
      .subscribe(
        response => {
          console.log('Reset link sent!', response);
        },
        // error => {
        //   console.error('Failed to send reset link!', error);
        // }
      );
  }

}
