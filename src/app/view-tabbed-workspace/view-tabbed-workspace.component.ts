import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  tabs = this.localDataService.mainUITabsData;

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
    console.log('close executed' + ind);
    this.tabs.splice(ind, 1);
  }

}
