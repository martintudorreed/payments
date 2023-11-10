import { Component, Input } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-control-provider-select',
  templateUrl: './control-provider-select.component.html',
  styleUrls: ['./control-provider-select.component.scss']
})
export class ControlProviderSelectComponent {
  @Input() isShowLabel: boolean = true;
  @Input() isSettings: boolean = false;
  paymentMethods = this.localDataService.paymentMethodData;
  selectedPaymentMethod = this.paymentMethods[0].paymentMethodID;

  constructor( private localDataService: LocalDataService,
               public dialog: MatDialog,
               public applicationModelService: ApplicationModelService) {
  }

  onSelectedCardTypeChange() {
    //   do something with your life;
  }
}
