import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-customer-payment-success',
  templateUrl: './form-customer-payment-success.component.html',
  styleUrls: ['./form-customer-payment-success.component.scss']
})
export class FormCustomerPaymentSuccessComponent {
  brands = this.localDataService.themeBrandData;
  dealerName = this.localDataService.generalSettingsData[0].dealerName;
  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  doChangeLogo(brand: string) {
    this.applicationModelService.selectedThemeBrand$.next(brand);
    localStorage.setItem('selectedLogo', brand);
  }
}
