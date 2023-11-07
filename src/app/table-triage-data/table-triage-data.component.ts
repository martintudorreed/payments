import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import { DialogLoadFromApplicationDatasourceComponent} from "../dialog-load-from-application-datasource/dialog-load-from-application-datasource.component";

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-triage-data',
  templateUrl: './table-triage-data.component.html',
  styleUrls: ['./table-triage-data.component.scss']
})
export class TableTriageDataComponent {

  triageData = this.localDataService.triageData;

  dataItems = this.localDataService.paymentListData;
  dataItem: any;

  dataItemIndexNo: number = -1

  tabs = this.localDataService.mainUITabsData;
  tabIndex: number = -1;
  tabOffset: number = 2;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService, public dialog: MatDialog, ) {
  }

  onRowClick(item: number) {
    this.dataItem  = this.localDataService.triageData[item];
    this.dataItems.unshift(
      {
        paymentIdNo: this.dataItems.length,
        paymentCustomerName:  this.dataItem.triageDataCustomerName,
        paymentDateRaised: '05/02/2032',
        paymentSource: 'Triage',
        paymentStatus: 'In Progress / Not Sent',
        paymentStatusId: 4,
        paymentTransactionProviderId: 0,
        paymentTransactionNumber: this.dataItem.triageDataJobNumber,
        paymentTransactionTotalExTax: this.dataItem.triageDataAuthorised,
        paymentTransactionTotalTax: this.dataItem.triageDataAuthorised,
        paymentTransactionTotalIncTax: this.dataItem.triageDataAuthorised,
        paymentTransactionCreatedOn: '05/02/2032',
        paymentTransactionCreatedBy: 'Martin Tudor Reed',
        paymentTransactionExpiry: '08/08/2032',
        paymentCustomerForename: this.dataItem.triageDataCustomerName,
        paymentCustomerSurname: this.dataItem.triageDataCustomerName,
        paymentCustomerTelNo: '64 021 885839',
        paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
        paymentAddress1: '777 Crater Lane',
        paymentAddress2: 'ALdrin Villas',
        paymentAddress3: 'The Sea of Tranquility',
        paymentState: 'The Moon',
        paymentPostCode: '522',
        paymentInvoiceLines: 'Operation Inspection details go here',
      }
    );
    if( !this.applicationModelService.isShowDashboard$.getValue()) {
      this.tabOffset = 1;
    } else {
      this.tabOffset = 2;
    }
    this.tabIndex = this.applicationModelService.currentTabCount$.getValue() + this.tabOffset;
    console.log('current tab should be ' + this.tabIndex + 'displayed no ' + (this.tabIndex + this.tabOffset));
    this.applicationModelService.nextNewTabContentType$.next('newPaymentTriage');
    this.tabs.push({
      tabIndex: this.tabIndex,
      tabLabel: 'RO:' + this.dataItem.triageDataJobNumber,
      tabContentType: 'newPaymentTriageNotSent',
      tabdataItemIndexNo: this.dataItems.length -1});

    console.log(this.tabs);

    setTimeout(() => {
      this.applicationModelService.activeMainUITab$.next(this.tabIndex);
      this.applicationModelService.currentTabCount$.next(this.tabIndex);
      this.dialog.closeAll();
    }, 200);
  }
}
