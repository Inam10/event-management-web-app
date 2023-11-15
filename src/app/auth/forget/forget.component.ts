import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  email: string = '';
  constructor(private forgotPasswordService: AuthService){}

  sendResetLink(): void {
    this.forgotPasswordService.sendResetLink(this.email)
      .subscribe(
        response => {
          console.log('Reset link sent!', response);
          // Display a success message or navigate to another page
        },
        error => {
          console.error('Failed to send reset link!', error);
          // Show error message to the user
        }
      );
  }

}
