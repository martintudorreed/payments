import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {LocalDataService} from "../services/local-data.service";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-payment-app',
  templateUrl: './dialog-payment-app.component.html',
  styleUrls: ['./dialog-payment-app.component.scss']
})
export class DialogPaymentAppComponent {
  isHasData: boolean = true;
  editMode: boolean = true;
  isHasAddress: boolean = true;
  totalExTax: number = 0.00;
  totalTax: number = 0.00;
  totalIncTax: number = 0.00;

  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  selectedTab: number = 1;

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

  onTabSelected(ev: any) {
    console.log('tab changed to' + ev.index)
      this.selectedTab = ev.index;
  }

  doNewPayment() {
    this.selectedTab = 1;
  }

}
