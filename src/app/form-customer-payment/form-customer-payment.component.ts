import {Component, Input} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-customer-payment',
  templateUrl: './form-customer-payment.component.html',
  styleUrls: ['./form-customer-payment.component.scss']
})
export class FormCustomerPaymentComponent {
  @Input() cardHolder: string ='';
  @Input() cardNumber: string ='';
  @Input() cardExpirationDate: string ='';
  @Input() cardCVC: string ='';

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
