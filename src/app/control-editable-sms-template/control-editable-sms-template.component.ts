import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-control-editable-sms-template',
  templateUrl: './control-editable-sms-template.component.html',
  styleUrls: ['./control-editable-sms-template.component.scss']
})
export class ControlEditableSmsTemplateComponent {
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
}
