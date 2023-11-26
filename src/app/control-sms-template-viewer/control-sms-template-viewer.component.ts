import {Component, Input, OnInit} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-sms-template-viewer',
  templateUrl: './control-sms-template-viewer.component.html',
  styleUrls: ['./control-sms-template-viewer.component.scss']
})
export class ControlSmsTemplateViewerComponent {
  paymentData = this.localDataService.paymentListData;
  settingsData = this.localDataService.generalSettingsData;

  templates = this.localDataService.smsTemplateData;
  smsContent = this.templates[0].smsTemplateContent;
  disclaimerData = this.localDataService.disclaimerData;

  @Input() dealerName: string = this.settingsData[0].dealerName;
  @Input() customerFirstname: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentCustomerForename;
  @Input() ammount: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionTotalIncTax.toFixed(2).toString();
  @Input() invoiceNumber: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionNumber;
  @Input() dueDate: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionExpiry;
  @Input() paymentVehicle: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentVehicle;
  @Input() workCarriedOut: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentInvoiceLines;
  @Input() triageDisclaimer: string = this.doBuildDisclaimer();
  workingString: string = '';

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  doReplaceKeysWithData(ind: number) {
    this.workingString = '';
    this.workingString = this.smsContent;
    this.workingString = this.workingString.replace(/\[dealerName\]/g, this.dealerName);
    this.workingString = this.workingString.replace(/\[customerFirstname\]/g, this.customerFirstname);
    this.workingString = this.workingString.replace(/\[ammount\]/g, this.settingsData[0].currencySymbol +   this.ammount);
    this.workingString = this.workingString.replace(/\[invoiceNumber\]/g, this.invoiceNumber);
    this.workingString = this.workingString.replace(/\[dueDate\]/g, this.dueDate);
    this.workingString = this.workingString.replace(/\[workCarriedOut\]/g, this.workCarriedOut);
    this.workingString = this.workingString.replace(/\[triageDisclaimer\]/g, this.triageDisclaimer);
    this.workingString = this.workingString.replace(/\[vehicle\]/g, this.paymentVehicle);
    this.workingString = this.workingString.replace(/\[tinyURL\]/g, '<a href="#">https://p.com/#4882424</a>');
    return this.workingString
  }

  doBuildDisclaimer() {
    const currentActiveDisclaimer = this.applicationModelService.currentDisclaimerIndexNumber$.getValue();
    if(this.disclaimerData[currentActiveDisclaimer].disclaimerIsLink) {
      return '<hr class="ifm-hr"/><a href="' + this.disclaimerData[currentActiveDisclaimer].disclaimerLink + '">' + this.disclaimerData[currentActiveDisclaimer].disclaimerContents + '</a>'
    } else {
      return '<hr class="ifm-hr"/>' + this.disclaimerData[currentActiveDisclaimer].disclaimerContents;
    }
  }
}
