import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogSendToCustomerComponent} from "../dialog-send-to-customer/dialog-send-to-customer.component";
import {DialogPaymentAppComponent} from "../dialog-payment-app/dialog-payment-app.component";

@Component({
  selector: 'app-view-payment-index',
  templateUrl: './view-payment-index.component.html',
  styleUrls: ['./view-payment-index.component.scss']
})
export class ViewPaymentIndexComponent {
  editMode: boolean = false;

  constructor(public router: Router,
              public dialog: MatDialog) {
  }

  doGoCustomer() {
    this.router.navigateByUrl('customer-payment');
  }

  doDialogWithData(mode: boolean, address: boolean) {
    this.dialog.open(DialogSendToCustomerComponent, {
      // width: '98%',
      maxWidth: '800px',
      minWidth: '300px',
      minHeight: '180px',
      maxHeight: '96vh',
      panelClass: 'ifm-dialog',
      autoFocus: false,
      data: {
        isHasData: mode,
        editMode: mode,
        isHasAddress: address
      }
    });
  }
  doDialogAppData(mode: boolean, address: boolean) {
    this.dialog.open(DialogPaymentAppComponent, {
      // width: '98%',
      maxWidth: '1000px',
      minWidth: '1000px',
      minHeight: '700px',
      maxHeight: '700px',
      panelClass: 'ifm-dialog',
      autoFocus: false,
      data: {
        isHasData: mode,
        editMode: mode,
        isHasAddress: address
      }
    });
  }

}
