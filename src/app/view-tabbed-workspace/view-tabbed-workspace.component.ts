import { Component } from '@angular/core';
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
export class ViewTabbedWorkspaceComponent {
  isHasData: boolean = true;
  editMode: boolean = true;
  isHasAddress: boolean = true;
  totalExTax: number = 0.00;
  totalTax: number = 0.00;
  totalIncTax: number = 0.00;
  selectedTab: number = 1;
  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  invoiceSource = this.localDataService.ifmAppData;

  tabs = this.localDataService.mainUITabsData;
  tabToTreatAsHome: number = 0;

  constructor( private localDataService: LocalDataService,
               public dialog: MatDialog,
               public applicationModelService: ApplicationModelService,
               private _snackBar: MatSnackBar) {
  }

  onTabSelected(ev: any) {
    console.log('tab changed to' + ev.index)
    this.applicationModelService.activeMainUITab$.next(ev.index);
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
}
