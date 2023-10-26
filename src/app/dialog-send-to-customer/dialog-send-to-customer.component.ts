import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {LocalDataService} from "../services/local-data.service";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-send-to-customer',
  templateUrl: './dialog-send-to-customer.component.html',
  styleUrls: ['./dialog-send-to-customer.component.scss']
})

export class DialogSendToCustomerComponent implements OnInit{
  isHasData: boolean = true;
  editMode: boolean = true;
  isHasAddress: boolean = true;
  totalExTax: number = 0.00;
  totalTax: number = 0.00;
  totalIncTax: number = 0.00;

  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.isHasData = this.data.isHasData;
    this.editMode = this.data.editMode;
    this.isHasAddress = this.data.isHasAddress;
  }

  doSend() {
    this._snackBar.open('ROXXXXXX Sent to User ' , 'Undo', {
      duration: 3000,
      panelClass: 'ifm-snackbar'
    });
  }
}
