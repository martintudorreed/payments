import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-control-send-email',
  templateUrl: './control-send-email.component.html',
  styleUrls: ['./control-send-email.component.scss']
})
export class ControlSendEmailComponent {
  emailForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  constructor(private emailService: EmailService) {}

  onSubmit() {
    if (this.emailForm.valid) {
      this.emailService.sendEmail(this.emailForm.value).subscribe(
        response => {
          console.log('Email sent successfully');
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    }
  }
}



