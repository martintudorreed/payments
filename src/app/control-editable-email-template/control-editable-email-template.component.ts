import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-editable-email-template',
  templateUrl: './control-editable-email-template.component.html',
  styleUrls: ['./control-editable-email-template.component.scss']
})
export class ControlEditableEmailTemplateComponent {
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;
}
