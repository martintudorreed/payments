import { Component, Input, OnInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-controls-payment-form',
  templateUrl: './controls-payment-form.component.html',
  styleUrls: ['./controls-payment-form.component.scss']
})
export class ControlsPaymentFormComponent implements OnInit{
  @Input() buttonText: string = 'Go Pay';

  @Input() totalExTax: number = 0.00;
  @Input() totalTax: number = 0.00;
  @Input() totalIncTax: number = 0.00;

  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  constructor(
    private localDataService: LocalDataService,
    public dialog: MatDialog,
    public applicationModelService: ApplicationModelService) {
  }

  ngOnInit() {
    console.log('tax is ' + this.totalTax);
  }

  onSelectedCardTypeChange() {
    //   do something with your life;
  }

}
