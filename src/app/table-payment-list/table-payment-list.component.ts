import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {LocalDataService, mainUITabs, paymentData} from "../services/local-data.service";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatDialog} from "@angular/material/dialog";
import {DialogCustomerFormComponent} from "../dialog-customer-form/dialog-customer-form.component";
import {DialogPaymentAppComponent} from "../dialog-payment-app/dialog-payment-app.component";
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {ResizeEvent} from "angular-resizable-element";

@Component({
  selector: 'app-table-payment-list',
  templateUrl: './table-payment-list.component.html',
  styleUrls: ['./table-payment-list.component.scss']
})

export class TablePaymentListComponent implements AfterViewInit{
  @Input() isStandalone: boolean = false;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  // dataSource = this.localDataService.paymentListData;
  displayedColumns: string[] = [ 'paymentTransactionCreatedOn','paymentCustomerSurname', 'paymentCustomerEmail', 'paymentSource', 'paymentTransactionNumber' ,'paymentStatus', 'paymentTransactionTotalIncTax', 'paymentTransactionExpiry', 'controls'];
  dataSource = new MatTableDataSource(this.localDataService.paymentListData);
  cardDataSource = this.localDataService.paymentListData;
  filteredData: any[];
  tabs = this.localDataService.mainUITabsData;
  tabIndex: number = -1;
  tabOffset: number = 2;

  dataItems = this.localDataService.paymentListData;
  dataItem: any;

  dataItemIndexNo: number = -1

  innerWidth: number = -1;

  filters = this.localDataService.gridFilterItemsData;

    constructor(public applicationModelService: ApplicationModelService,
                private localDataService: LocalDataService, public dialog: MatDialog, ) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    ngAfterViewInit() {
      setTimeout(() => {
        this.doRefresh();
      }, 200);
      this.doFilter();

      if (localStorage.getItem('columnOrder')) {
        console.log('anything in here');
        const cols = localStorage.getItem('columnOrder');
        this.displayedColumns = (JSON.parse(cols as string));
      }
      this.dataSource.sort = this.sort;
      // this.displayedColumns = JSON.parse(localStorage.getItem('columnOrder'));
    }

  onRowClick(item: number) {
      console.log('paymenIdNo = ' + item);
      for (let i = 0; i < this.dataItems.length; i++) {
        if (this.dataItems[i].paymentIdNo === item) {
          this.dataItem = this.dataItems[i];
          this.dataItemIndexNo = i;
        }
      }

    if( !this.isStandalone ) {
      // this.dataItem = this.dataItems[this.dataItemIndexNo];
      if( !this.applicationModelService.isShowDashboard$.getValue()) {
        this.tabOffset = 1;
      } else {
        this.tabOffset = 2;
      }
      this.tabIndex = this.applicationModelService.currentTabCount$.getValue() + this.tabOffset;
      console.log('current tab should be ' + this.tabIndex + 'displayed no ' + (this.tabIndex + this.tabOffset));

      this.tabs.push({
        tabIndex: this.tabIndex,
        tabLabel: this.dataItem.paymentTransactionNumber,
        tabContentType: 'payment',
        tabdataItemIndexNo: this.dataItemIndexNo});

      setTimeout(() => {
        this.applicationModelService.activeMainUITab$.next(this.tabIndex);
        this.applicationModelService.currentTabCount$.next(this.tabIndex);
      }, 200);
    } else {
      this.applicationModelService.isInIframe$.next(true);
      this.applicationModelService.isInIframeDataValue$.next(this.dataItemIndexNo);
      this.doOpenFormInDialog();
    }

    }

  absorb(ev: any) {
    ev.stopPropagation();
  }

  doCardlessPayment() {
    this.dialog.open(DialogCustomerFormComponent, {
      maxWidth: '800px',
      minWidth: '380px',
      minHeight: '180px',
      maxHeight: '96vh',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }

  doOpenFormInDialog() {
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    console.log(this.displayedColumns);
    localStorage.setItem('columnOrder', JSON.stringify(this.displayedColumns));
  }

  doRefresh(): void{
    this.dataSource.sort = this.sort;
    this.table.renderRows();
    this.doFilter();
  }

  doFilter() {
    this.filteredData = this.localDataService.paymentListData.filter(payment => payment.paymentStatusId === 0);
    console.log(this.filteredData);
  }

}
