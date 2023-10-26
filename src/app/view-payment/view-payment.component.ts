import { Component, Input, OnInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit{
  @Input() poweredBy: string = ''
  @Input() cardHolder: string = 'Martin Tudor Reed'
  @Input() cardNumber: string = ''
  @Input() cardExpirationDate: string = '';
  @Input() cardCVC: string = '';
  @Input() contactNumber: string = '021 885839';
  @Input() contactEmail: string = 'mtudoreed@infomedia.com.au';
  @Input() addressLine1: string = '7 Palazzo Drive';
  @Input() addressLine2: string = 'Papamoa';
  @Input() addressLine3: string = 'Papamoa East';
  @Input() state: string = 'Bay of Plenty';
  @Input() postcode: string = '3118';
  @Input() reviewText: string = 'Review Your Details';
  @Input() paymentText: string = 'Secure Payment';
  @Input() paymentReference: string = 'RO88422';
  @Input() buttonText: string = 'Go Pay';
  @Input() summaryData: string = 'Replace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n';
  @Input() editMode: boolean = false;
  @Input() isHasData: boolean = true;
  @Input() isHasAddress: boolean = true;
  @Input() noBorder: boolean = false;

  @Input() totalExTax: number = 80.00;
  @Input() totalTax: number = 8.00;
  @Input() totalIncTax: number = 88.00;

  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  constructor(
              private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService) {
  }

  ngOnInit() {
    if(!this.isHasData) {
      this.cardHolder = '';
      this.contactNumber = '';
      this.contactEmail = '';
      this.addressLine1 = '';
      this.addressLine2 = '';
      this.addressLine3 = '';
      this.state = '';
      this.postcode = '';
      this.summaryData = '';
      this.paymentReference = '';
      this.totalExTax = 0.00;
      this.totalTax = 0.00;
      this.totalIncTax = 0.00;
    }
  }

  onSelectedCardTypeChange() {
  //   do something with your life;
  }
}
