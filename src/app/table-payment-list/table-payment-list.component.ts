import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-table-payment-list',
  templateUrl: './table-payment-list.component.html',
  styleUrls: ['./table-payment-list.component.scss']
})
export class TablePaymentListComponent {

  dataSource = this.localDataService.paymentListData;
  displayedColumns: string[] = ['paymentCustomerSurname', 'paymentTransactionCreatedOn', 'paymentSource', 'paymentStatus', 'paymentTransactionTotalIncTax',];

  tabs = this.localDataService.mainUITabsData;
  tabIndex: number = -1;

  dataItems = this.localDataService.paymentListData;
  dataItem: any;

  dataItemIndexNo: number = -1

    constructor(public applicationModelService: ApplicationModelService,
                private localDataService: LocalDataService ) {
    }

    onRowClick(item: number) {
      console.log('paymenIdNo = ' + item);
      for (let i = 0; i < this.dataItems.length; i++) {
        if (this.dataItems[i].paymentIdNo === item) {
            this.dataItem = this.dataItems[i];
            this.dataItemIndexNo = i;
        }
      }
      // this.dataItem = this.dataItems[this.dataItemIndexNo];
      this.tabIndex = this.applicationModelService.currentTabCount$.getValue() + 1;
      console.log('current tab should be ' + this.tabIndex + 'displayed no ' + (this.tabIndex + 1));

      this.tabs.push({
        tabIndex: this.tabIndex,
        tabLabel: this.dataItem.paymentTransactionNumber,
        tabContentType: 'payment',
        tabdataItemIndexNo: this.dataItemIndexNo});

      setTimeout(() => {
        this.applicationModelService.activeMainUITab$.next(this.tabIndex);
        this.applicationModelService.currentTabCount$.next(this.tabIndex);
      }, 200);
    }


}
