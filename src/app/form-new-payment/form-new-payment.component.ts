import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DialogCustomerFormComponent} from "../dialog-customer-form/dialog-customer-form.component";
import {DialogLoadFromApplicationDatasourceComponent} from "../dialog-load-from-application-datasource/dialog-load-from-application-datasource.component";
import { DialogShowTransactionHistoryComponent } from "../dialog-show-transaction-history/dialog-show-transaction-history.component";
import { NavigationEnd, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form-new-payment',
  templateUrl: './form-new-payment.component.html',
  styleUrls: ['./form-new-payment.component.scss']
})
export class FormNewPaymentComponent implements OnInit, AfterViewInit{
  @Input() dataItemIndexNo: number = -1;
  @Input() tabContentType: string = 'newPayment';
  @Input() isStandalone: boolean = false;
  browserWindowWidthValue: number | null = null;
  search: string = '';

  isShowEmail: number = 0;
  isHasAddress: boolean = false;

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

  tabIndex: number = -1;
  tabToTreatAsHome: number = 0

  sourceApp = this.localDataService.ifmAppData;
  selectedSauceID: string = '3';

  dataItems = this.localDataService.paymentListData;
  dataItem: any;

  tabs = this.localDataService.mainUITabsData;

  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  isDragging: boolean = false;
  isViewAttachment: boolean = true;

  viewerURLString: string = 'http://localhost:4402/assets/docs/pdfs/invoice.pdf'
  activeDocument: number = 0;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router,) {
  }
  ngOnInit() {

    if(this.dataItemIndexNo === -1) {
      this.applicationModelService.currentTemplateIdViewer$.next('0');
      this.isViewAttachment = false;
    }
    if (this.paymentStatusId === 5) {
      this.isViewAttachment = false;
    }

    // if it's loaded from triage in iframe'
      console.log('is in an iframe ?' + this.applicationModelService.isInIframe$.getValue())
    if(this.applicationModelService.isInIframe$.getValue() === true) {
      console.log('firing');
      this.dataItemIndexNo = this.applicationModelService.isInIframeDataValue$.getValue();
      this.doLoadItem();
    }
    this.doLoadItem();
  }

  doLoadItem() {
    if (this.dataItemIndexNo !== -1) {
      this.dataItem = this.dataItems[this.dataItemIndexNo];
      this.paymentIdNo = this.dataItem.paymentIdNo ;
      this.paymentCustomerName = this.dataItem.paymentCustomerName;
      this.paymentDateRaised = this.dataItem.paymentDateRaised;
      this.paymentSource = this.dataItem.paymentSource;
      this.paymentStatus = this.dataItem.paymentStatus;
      this.paymentStatusId = this.dataItem.paymentStatusId;
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
      this.paymentVehicle = this.dataItem.paymentVehicle;
      this.paymentInvoiceLines = this.dataItem.paymentInvoiceLines;
      this.selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;
    } else {

      // this.dataItems.push({
      //   paymentIdNo: this.dataItems.length,
      //   paymentCustomerName:  this.paymentCustomerName,
      //   paymentDateRaised: this.paymentDateRaised,
      //   paymentSource: this.paymentSource,
      //   paymentStatus: this.paymentStatus,
      //   paymentStatusId: this.paymentStatusId,
      //   paymentTransactionProviderId: this.paymentTransactionProviderId,
      //   paymentTransactionNumber: this.paymentTransactionNumber,
      //   paymentTransactionTotalExTax: this.paymentTransactionTotalExTax,
      //   paymentTransactionTotalTax: this.paymentTransactionTotalTax,
      //   paymentTransactionTotalIncTax: this.paymentTransactionTotalIncTax,
      //   paymentTransactionCreatedOn: this.paymentTransactionCreatedOn,
      //   paymentTransactionCreatedBy: this.paymentTransactionCreatedBy,
      //   paymentTransactionExpiry: this.paymentTransactionExpiry,
      //   paymentCustomerForename: this.paymentCustomerForename,
      //   paymentCustomerSurname: this.paymentCustomerSurname,
      //   paymentCustomerTelNo: this.paymentCustomerTelNo,
      //   paymentCustomerEmail: this.paymentCustomerEmail,
      //   paymentAddress1: this.paymentAddress1,
      //   paymentAddress2: this.paymentAddress2,
      //   paymentAddress3: this.paymentAddress3,
      //   paymentState: this.paymentState,
      //   paymentPostCode: this.paymentPostCode,
      //   paymentVehicle: this.paymentVehicle,
      //   paymentInvoiceLines: this.paymentInvoiceLines,
      // })
      // console.log('so at this point the currentPaymentIndexNumber$ =');
      // console.log(this.dataItems.length);
    }
    // this.applicationModelService.currentPaymentIndexNumber$.next(this.paymentIdNo);

  }

  ngAfterViewInit() {
    this.applicationModelService.browserWindowWidth$.next(window.innerWidth);
    setTimeout(() => {
      // this.isLoading = false;
    }, 2000);

    this.applicationModelService.browserWindowWidth$.subscribe((width: number | null) => {
      this.browserWindowWidthValue = width;
    });
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
      });

    setTimeout(() => {
      if( !this.applicationModelService.isShowDashboard$.getValue()) {
        this.tabToTreatAsHome = 0;
      } else {
        this.tabToTreatAsHome = 1;
      }
      this.applicationModelService.activeMainUITab$.next(this.tabToTreatAsHome);

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
    this.paymentVehicle = '';
    this.paymentInvoiceLines = '';
  }

  doToggleAddress() {
    this.isHasAddress = !this.isHasAddress;
  }

  doCardlessPayment(ev: any) {
    ev.stopPropagation();
    this.dialog.open(DialogCustomerFormComponent, {
      maxWidth: '466px',
      minWidth: '466px',
      minHeight: '96%',
      maxHeight: '96vh',
      height: '96%',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }

  onSelectedSourceChange(id: string) {
    if (id !== '3') {
      this.dialog.open(DialogLoadFromApplicationDatasourceComponent, {
        maxWidth: '800px',
        minWidth: '300px',
        minHeight: '180px',
        maxHeight: '96vh',
        panelClass: 'ifm-dialog',
        autoFocus: false,
        data: {
          sourceAppID: '0',
        }
      });
    }
    setTimeout(() => {
      this.selectedSauceID === '3';
    }, 500);

  }

  doSendFromDataSource() {
    this.dataItems.unshift({
      paymentIdNo: this.paymentIdNo,
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
    });

    setTimeout(() => {
      if( !this.applicationModelService.isShowDashboard$.getValue()) {
        this.tabToTreatAsHome = 0;
      } else {
        this.tabToTreatAsHome = 1;
      }
      this.applicationModelService.activeMainUITab$.next(this.tabToTreatAsHome);

      this._snackBar.open('ROXXXXXX Sent to User ' , 'Undo', {
        duration: 3000,
        panelClass: 'ifm-snackbar'
      });
    }, 200);
  }

  doDragEnter() {
    this.isDragging = !this.isDragging
  }
  doDragLeave() {
    this.isDragging = !this.isDragging
  }

 doToggleAttachmentViewer() {
    this.isViewAttachment = !this.isViewAttachment;
 }

  doLoadDocument(ind: number) {
    if (ind === 0) {
      this.viewerURLString = 'http://localhost:4402/assets/docs/pdfs/invoice.pdf';
      console.log(this.viewerURLString);
    } else {
      this.viewerURLString = 'http://localhost:4402/assets/docs/pdfs/tsandcs.pdf'
      console.log(this.viewerURLString);
    }
    this.activeDocument = ind;
    if (!this.isViewAttachment) {
      this.isViewAttachment = true;
    }
  }

  onBlurTouchViewer(ev: any) {
    this.doUpdate();
    const eek = this.applicationModelService.currentTemplateIdViewer$.getValue();
    this.applicationModelService.currentTemplateIdViewer$.next(eek);
  }

  doUpdate() {
      const activePayment = this.applicationModelService.currentPaymentIndexNumber$.getValue();
      console.log('payment index is');
      console.log(activePayment);
      this.dataItems[activePayment].paymentIdNo = this.paymentIdNo;
      this.dataItems[activePayment].paymentCustomerName = this.paymentCustomerName;
      this.dataItems[activePayment].paymentDateRaised = this.paymentDateRaised;
      this.dataItems[activePayment].paymentSource = this.paymentSource;
      this.dataItems[activePayment].paymentStatus = this.paymentStatus;
      this.dataItems[activePayment].paymentStatusId = this.paymentStatusId;
      this.dataItems[activePayment].paymentTransactionProviderId = this.paymentTransactionProviderId;
      this.dataItems[activePayment].paymentTransactionNumber = this.paymentTransactionNumber;
      this.dataItems[activePayment].paymentTransactionTotalExTax = this.paymentTransactionTotalExTax;
      this.dataItems[activePayment].paymentTransactionTotalTax = this.paymentTransactionTotalTax;
      this.dataItems[activePayment].paymentTransactionTotalIncTax = this.paymentTransactionTotalIncTax;
      this.dataItems[activePayment].paymentTransactionCreatedOn = this.paymentTransactionCreatedOn;
      this.dataItems[activePayment].paymentTransactionCreatedBy = this.paymentTransactionCreatedBy;
      this.dataItems[activePayment].paymentTransactionExpiry = this.paymentTransactionExpiry;
      this.dataItems[activePayment].paymentCustomerForename = this.paymentCustomerForename;
      this.dataItems[activePayment].paymentCustomerSurname = this.paymentCustomerSurname;
      this.dataItems[activePayment].paymentCustomerTelNo = this.paymentCustomerTelNo;
      this.dataItems[activePayment].paymentCustomerEmail = this.paymentCustomerEmail;
      this.dataItems[activePayment].paymentAddress1 = this.paymentAddress1;
      this.dataItems[activePayment].paymentAddress2 = this.paymentAddress2;
      this.dataItems[activePayment].paymentAddress3 = this.paymentAddress3;
      this.dataItems[activePayment].paymentState = this.paymentState;
      this.dataItems[activePayment].paymentPostCode = this.paymentPostCode;
      this.dataItems[activePayment].paymentVehicle = this.paymentVehicle;
      this.dataItems[activePayment].paymentInvoiceLines = this.paymentInvoiceLines;
  }

  doCancelTransaction() {

  }

  doMarkAsPaid() {

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
 }

