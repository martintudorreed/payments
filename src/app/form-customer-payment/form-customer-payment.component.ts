import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-customer-payment',
  templateUrl: './form-customer-payment.component.html',
  styleUrls: ['./form-customer-payment.component.scss']
})
export class FormCustomerPaymentComponent {
  @Input() cardHolder: string ='';
  @Input() cardNumber: string ='';
  @Input() cardExpirationDate: string ='';
  @Input() cardCVC: string ='';
}
