import { Component, Input } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form-new-payment',
  templateUrl: './form-new-payment.component.html',
  styleUrls: ['./form-new-payment.component.scss']
})
export class FormNewPaymentComponent {
  @Input() dataItemIndexNo: number = -1;
  @Input() tabContentType: string = 'newPayment';

  paymentIdNo: number = -1;
  paymentCustomerName: string = '';
  paymentDateRaised: string =  '';
  paymentSource: string = '';
  paymentStatus: string = '';
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
  paymentInvoiceLines: string = '';


  tabIndex: number = -1;

  dataItems = this.localDataService.paymentListData;
  dataItem: any;

  tabs = this.localDataService.mainUITabsData;
  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
    if (this.dataItemIndexNo !== -1) {
      this.dataItem = this.dataItems[this.dataItemIndexNo];
      this.paymentIdNo = this.dataItem.paymentIdNo ;
      this.paymentCustomerName = this.dataItem.paymentCustomerName;
      this.paymentDateRaised = this.dataItem.paymentDateRaised;
      this.paymentSource = this.dataItem.paymentSource;
      this.paymentStatus = this.dataItem.paymentStatus;
      this.paymentTransactionProviderId = this.dataItem.paymentTransactionProviderId;
      this.paymentTransactionNumber = this.dataItem.paymentTransactionNumber;
      this.paymentTransactionTotalExTax = this.dataItem.paymentTransactionTotalExTax;
      this.paymentTransactionTotalTax = this.dataItem.paymentTransactionTotalTax;
      this.paymentTransactionTotalIncTax = this.dataItem.paymentTransactionTotalIncTax;
      this.paymentTransactionCreatedOn = this.dataItem.paymentTransactionCreatedOn;
      this.paymentTransactionCreatedBy = this.dataItem.paymentTransactionCreatedBy;
      this.paymentTransactionExpiry = this.dataItem.paymentTransactionExpiry;
      this.paymentCustomerForename = this.dataItem.paymentCustomerForename;
      this.paymentCustomerSurname = this.dataItem.paymentCustomerSurname;
      this.paymentCustomerTelNo = this.dataItem.paymentCustomerTelNo;
      this.paymentCustomerEmail = this.dataItem.paymentCustomerEmail;
      this.paymentAddress1 = this.dataItem.paymentAddress1;
      this.paymentAddress2 = this.dataItem.paymentAddress2;
      this.paymentAddress3 = this.dataItem.paymentAddress3;
      this.paymentState = this.dataItem.paymentState;
      this.paymentPostCode = this.dataItem.paymentPostCode;
      this.paymentInvoiceLines = this.dataItem.paymentInvoiceLines;

    }

    console.log('form is loading with adata item number of ' + this.dataItemIndexNo);
  }

  onSelectedCardTypeChange() {
    //   do something with your life;
  }

  doSend() {
    this.tabIndex = this.applicationModelService.currentTabCount$.getValue() + 1;
    this.tabs.push({
      tabIndex: this.tabIndex,
      tabLabel: 'TN:' + (this.tabs.length + 1).toString(),
      tabContentType: 'payment',
      tabdataItemIndexNo: -1});

    this.dataItems.unshift({
      paymentIdNo: this.paymentIdNo,
      paymentCustomerName:  this.paymentCustomerName,
      paymentDateRaised: this.paymentDateRaised,
      paymentSource: this.paymentSource,
      paymentStatus: this.paymentStatus,
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
      paymentInvoiceLines: this.paymentInvoiceLines,
      });

    setTimeout(() => {
      this.applicationModelService.activeMainUITab$.next(0);

      this._snackBar.open('ROXXXXXX Sent to User ' , 'Undo', {
        duration: 3000,
        panelClass: 'ifm-snackbar'
      });
    }, 200);


  }

  doClearFields() {
    this.paymentCustomerName = '';
    this.paymentStatus = '';
    this.paymentTransactionProviderId = -1;
    this.paymentTransactionNumber = '';
    this.paymentTransactionTotalExTax = 0.00;
    this.paymentTransactionTotalTax = 0.00;
    this.paymentTransactionTotalIncTax = 0.00;
    this.paymentTransactionExpiry = '';
    this.paymentCustomerForename = '';
    this.paymentCustomerSurname = '';
    this.paymentCustomerTelNo = '';
    this.paymentCustomerEmail = '';
    this.paymentAddress1 = '';
    this.paymentAddress2 = '';
    this.paymentAddress3 = '';
    this.paymentState = '';
    this.paymentPostCode = '';
    this.paymentInvoiceLines = '';
  }
}

