import {Component, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-control-editable-sms-template',
  templateUrl: './control-editable-sms-template.component.html',
  styleUrls: ['./control-editable-sms-template.component.scss']
})
export class ControlEditableSmsTemplateComponent implements AfterViewInit{
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'

  charsInSMS: number = 0;

  sectionContent: string = 'Tax invoice INV-6209 for $[ammount] <br><br>' +
  'Please click the link below to view, print, download or pay the invoice.<br><br>' +
    '[tinyURL]<br><br>' +
  '[dealerName]'

  ngAfterViewInit() {
    this.doCountChars();
  }

  doBlur(ev: any) {
    this.doCountChars();
  }

  insertText(val: string) {

  }

  doCountChars() {
    return this.sectionContent.length;
  }
}
