import { Component, Input } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-payment-table-only',
  templateUrl: './view-payment-table-only.component.html',
  styleUrls: ['./view-payment-table-only.component.scss']
})
export class ViewPaymentTableOnlyComponent {
  @Input() isStandalone: boolean = false;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService,
              public dialog: MatDialog,) {
  }
}
