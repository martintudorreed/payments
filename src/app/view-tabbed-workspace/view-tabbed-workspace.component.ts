import { Component, OnInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DialogLoadFromApplicationDatasourceComponent} from "../dialog-load-from-application-datasource/dialog-load-from-application-datasource.component";
import {DialogCustomerFormComponent} from "../dialog-customer-form/dialog-customer-form.component";

@Component({
  selector: 'app-view-tabbed-workspace',
  templateUrl: './view-tabbed-workspace.component.html',
  styleUrls: ['./view-tabbed-workspace.component.scss']
})
export class ViewTabbedWorkspaceComponent implements OnInit {
  isHasData: boolean = true;
  editMode: boolean = true;
  isHasAddress: boolean = true;
  totalExTax: number = 0.00;
  totalTax: number = 0.00;
  totalIncTax: number = 0.00;
  selectedTab: number = 1;
  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  invoiceSource = this.localDataService.ifmAppData.slice(1);

  tabs = this.localDataService.mainUITabsData;
  tabToTreatAsHome: number = 0;
  animationSpeed: number = 0;

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

  constructor( private localDataService: LocalDataService,
               public dialog: MatDialog,
               public applicationModelService: ApplicationModelService,
               private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.applicationModelService.isUsePhaseIUI$.next(false);
  }

  onTabSelected(ev: any) {
    console.log('tab changed to' + ev.index)
    this.applicationModelService.activeMainUITab$.next(ev.index);
    if(ev.index === 1) {
      this.doCreateNew();
    }
  }

  doCloseTab(ind: number) {
    if(!this.applicationModelService.isShowDashboard$.getValue()) {
      this.tabToTreatAsHome = 0;
    } else {
      this.tabToTreatAsHome = 1;
    }
    this.applicationModelService.currentTabCount$.next(this.applicationModelService.currentTabCount$.getValue() -1 );
    this.applicationModelService.activeMainUITab$.next(this.tabToTreatAsHome);
    console.log('close executed' + ind);
    this.tabs.splice(ind, 1);
  }

  loadAppChooser(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();
    this.doLoadSourceData('1');
  }

  absorb(ev: any) {
    ev.stopPropagation();
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

  doCreateNew() {
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
    const eek = this.applicationModelService.currentTemplateIdViewer$.getValue();
    this.applicationModelService.currentTemplateIdViewer$.next(eek);
  }

  getAnimationSpeed() {
    if(this.applicationModelService.isTabAnimationRemoved$.getValue()) {
      return  0;
    } else {
      return  200;
    }
  }
}
