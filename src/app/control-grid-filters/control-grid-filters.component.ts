import { Component, Input } from '@angular/core';
import { DialogPaymentAppComponent } from "../dialog-payment-app/dialog-payment-app.component";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";

@Component({
  selector: 'app-control-grid-filters',
  templateUrl: './control-grid-filters.component.html',
  styleUrls: ['./control-grid-filters.component.scss']
})
export class ControlGridFiltersComponent {
  @Input() isStandalone: boolean = false;
  search: string = '';
  dpicker: string = '';
  dpicker1: string = '';

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
  constructor(public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService) {
  }

  doOpenFormInDialog() {
    this.applicationModelService.isInIframe$.next(true);
    // this.applicationModelService.isInIframeDataValue$.next(this.dataItemIndexNo);

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


    this.dialog.open(DialogPaymentAppComponent, {
      maxWidth: '96%',
      minWidth: '96%',
      width: '96%',
      minHeight: '96%',
      maxHeight: '96vh',
      height: '96%',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }

  doToggleMultiDealershipsInTable() {}
}
