import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-payment-form-only',
  templateUrl: './view-payment-form-only.component.html',
  styleUrls: ['./view-payment-form-only.component.scss']
})
export class ViewPaymentFormOnlyComponent {

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService,
              public dialog: MatDialog,) {
  }

}
