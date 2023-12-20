import { Component, Input, OnInit } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogLoadFromApplicationDatasourceComponent
} from "../dialog-load-from-application-datasource/dialog-load-from-application-datasource.component";
import {
  DialogShowTransactionHistoryComponent
} from "../dialog-show-transaction-history/dialog-show-transaction-history.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-headerv2',
  templateUrl: './headerv2.component.html',
  styleUrls: ['./headerv2.component.scss']
})
export class Headerv2Component implements OnInit {
  @Input() isStandalone: boolean = false;
  invoiceSource = this.localDataService.ifmAppData.slice(1);

  payments = this.localDataService.paymentListData

  paymentIdNo: number = -1;
  paymentCustomerName: string = '';
  paymentDateRaised: string =  '';
  paymentSource: string = '';
  paymentStatus: string = 'New Payment';
  paymentStatusId: number = 5;
  paymentTransactionProviderId: number = 0;
  paymentTransactionNumber: string = '';
  paymentTransactionTotalExTax: number = 0.00;
  paymentTransactionTotalTax: number = 0.00;
  paymentTransactionTotalIncTax: number = 0.00;
  paymentTransactionCreatedOn: string = '';
  paymentTransactionCreatedBy: string = '';
  paymentTransactionExpiry: string = '';
  paymentCustomerForename: string = '';
  paymentCustomerSurname: string = '';
  paymentCustomerTelNo: string = '';
  paymentCustomerEmail: string = '';
  paymentAddress1: string = '';
  paymentAddress2: string = '';
  paymentAddress3: string = '';
  paymentState: string = '';
  paymentPostCode: string = '';
  paymentVehicle: string = '';
  paymentInvoiceLines: string = '';

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar,) {
  }

  ngOnInit() {
    if(this.isStandalone) {
      this.applicationModelService.isPaymentOpen$.next(true);
    }
  }

  doAddNew() {
    this.payments.push({
      paymentIdNo: this.payments.length,
      paymentCustomerName:  this.paymentCustomerName,
      paymentDateRaised: this.paymentDateRaised,
      paymentSource: this.paymentSource,
      paymentStatus: this.paymentStatus,
      paymentStatusId: this.paymentStatusId,
      paymentTransactionProviderId: this.paymentTransactionProviderId,
      paymentTransactionNumber: this.paymentTransactionNumber,
      paymentTransactionTotalExTax: this.paymentTransactionTotalExTax,
      paymentTransactionTotalTax: this.paymentTransactionTotalTax,
      paymentTransactionTotalIncTax: this.paymentTransactionTotalIncTax,
      paymentTransactionCreatedOn: this.paymentTransactionCreatedOn,
      paymentTransactionCreatedBy: this.paymentTransactionCreatedBy,
      paymentTransactionExpiry: this.paymentTransactionExpiry,
      paymentCustomerForename: this.paymentCustomerForename,
      paymentCustomerSurname: this.paymentCustomerSurname,
      paymentCustomerTelNo: this.paymentCustomerTelNo,
      paymentCustomerEmail: this.paymentCustomerEmail,
      paymentAddress1: this.paymentAddress1,
      paymentAddress2: this.paymentAddress2,
      paymentAddress3: this.paymentAddress3,
      paymentState: this.paymentState,
      paymentPostCode: this.paymentPostCode,
      paymentVehicle: this.paymentVehicle,
      paymentInvoiceLines: this.paymentInvoiceLines,
    })
    this.applicationModelService.currentPaymentIndexNumber$.next(this.payments.length -1);

    // touch the form to refresh.
    const eek = this.applicationModelService.currentTemplateIdViewer$.getValue();
    this.applicationModelService.currentTemplateIdViewer$.next(eek);

    this.applicationModelService.isPaymentOpen$.next(true);
    setTimeout(() => {
      this.applicationModelService.currentPaymentIndexNumber$.next(this.payments.length -1);
    }, 100);


  }

  doLoadSourceData(sourceAppID: string) {
    this.dialog.open(DialogLoadFromApplicationDatasourceComponent, {
      maxWidth: '800px',
      minWidth: '96%',
      minHeight: '180px',
      maxHeight: '96vh',
      panelClass: 'ifm-dialog',
      autoFocus: false,data: {
        sourceAppID: sourceAppID,
      }
    });
  }
  doIndex() {
    this.applicationModelService.isPaymentOpen$.next(false);
  }

  doAbsorb(ev: any) {
    ev.stopPropagation();
  }

  doShowHistory(ev: any) {
    ev.stopPropagation();
    this.dialog.open(DialogShowTransactionHistoryComponent, {
      maxWidth: 'unset',
      width: '96%',
      minWidth: '466px',
      minHeight: '96%',
      maxHeight: '96vh',
      height: '96%',
      panelClass: 'ifm-dialog',
      autoFocus: false,
      disableClose: false,
    });
  }

  doSend() {
    this._snackBar.open('Email Sent to User' , 'Undo', {
      duration: 5000,
      panelClass: 'ifm-snackbar'
    });
  }

  doCancel() {
    this._snackBar.open('Smoke and Mirrors' , 'Undo', {
      duration: 5000,
      panelClass: 'ifm-snackbar'
    });
  }

}
