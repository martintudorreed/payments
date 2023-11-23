import { Component, Input, OnInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {DialogCustomerFormComponent} from "../dialog-customer-form/dialog-customer-form.component";
import {DialogFullScreenEmailViewerComponent} from "../dialog-full-screen-email-viewer/dialog-full-screen-email-viewer.component";

@Component({
  selector: 'app-control-display-send-methods',
  templateUrl: './control-display-send-methods.component.html',
  styleUrls: ['./control-display-send-methods.component.scss']
})
export class ControlDisplaySendMethodsComponent implements OnInit{
  @Input() customerName: string = '';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;
  @Input() paymentStatusId: number = 0;
  isEMailChecked: boolean = true;
  isSMSChecked: boolean = false;

  dataSource = this.localDataService.templateData;
  selectedTemplate: string = this.applicationModelService.currentTemplateIdViewer$.getValue();

  emailDataSource = this.localDataService.emailSettingData;
  paymentDataSource = this.localDataService.paymentListData;
  currentPaymentIndexNo = this.applicationModelService.currentPaymentIndexNumber$.getValue();
  settingsData = this.localDataService.generalSettingsData;

  foundTemplateIndex: number = 0;
  foundEMailTemplateIndex: number = 0;

  workingString: string = '';

  ngOnInit() {
    // if(this.paymentStatusId === 2) {
    //   this.applicationModelService.currentTemplateIdViewer$.next('1');
    // }
    this.doFindTemplate(this.selectedTemplate);
    this.doFindEmailTemplateData(this.dataSource[this.foundTemplateIndex].templateEmailSourceID);
  }


  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {}

  onTabSelected(ev: any) {

  }

  doCheckBoxStatus(ind: number, ev: any) {
    // ev.stopPropagation();

    console.log(ind + 'is the index no clicked')
    console.log('isMailChecked = '  + this.isEMailChecked);
    console.log('isSMSChecked = '  + this.isSMSChecked);

    if(!this.isSMSChecked && !this.isEMailChecked ) {
      this.isEMailChecked = true;
      this._snackBar.open('Send Defaults to Email' , 'Undo', {
        duration: 3000,
        panelClass: 'ifm-snackbar'
      });
    }

  }

  doSelectTemplate(templateID: string) {
    this.applicationModelService.currentTemplateIdViewer$.next(templateID);
    this.doFindTemplate(this.applicationModelService.currentTemplateIdViewer$.getValue());
    this.doFindEmailTemplateData(this.dataSource[this.foundTemplateIndex].templateEmailSourceID);
  }

  doFullScreen(ev: any) {
    ev.stopPropagation();
    this.dialog.open(DialogFullScreenEmailViewerComponent, {
      maxWidth: '100%',
      width: '96%',
      minWidth: '96%',
      minHeight: '96%',
      maxHeight: '96vh',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }

  doFindTemplate(templateIDToUse: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateIDToUse);
  }

  doFindEmailTemplateData(templateIDToUse: string) {
    this.foundEMailTemplateIndex = this.dataSource.findIndex(template => template.templateEmailSourceID === templateIDToUse);
  }

  doReplaceKeysWithData() {
    this.workingString = '';
    this.workingString = this.emailDataSource[this.foundEMailTemplateIndex].emailSubject;
    this.workingString = this.workingString.replace(/\[dealerName\]/g, this.settingsData[0].dealerName);
    this.workingString = this.workingString.replace(/\[customerFirstname\]/g, this.paymentDataSource[this.currentPaymentIndexNo].paymentCustomerForename);
    this.workingString = this.workingString.replace(/\[ammount\]/g, this.settingsData[0].currencySymbol +  this.paymentDataSource[this.currentPaymentIndexNo].paymentTransactionTotalIncTax);
    this.workingString = this.workingString.replace(/\[invoiceNumber\]/g, this.paymentDataSource[this.currentPaymentIndexNo].paymentTransactionNumber);
    this.workingString = this.workingString.replace(/\[dueDate\]/g, this.paymentDataSource[this.currentPaymentIndexNo].paymentTransactionExpiry);
    this.workingString = this.workingString.replace(/\[workCarriedOut\]/g, this.paymentDataSource[this.currentPaymentIndexNo].paymentInvoiceLines);
    return this.workingString
  }
}
