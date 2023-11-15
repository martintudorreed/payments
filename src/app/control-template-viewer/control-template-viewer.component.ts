import { Component, Input, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {DialogCustomerFormComponent} from "../dialog-customer-form/dialog-customer-form.component";

@Component({
  selector: 'app-control-template-viewer',
  templateUrl: './control-template-viewer.component.html',
  styleUrls: ['./control-template-viewer.component.scss']
})
export class ControlTemplateViewerComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() templateIDToUse: string = '0' as string;
  @Input() currentPaymentItemIndexNo: number = 0;

  paymentData = this.localDataService.paymentListData;

  settingsData = this.localDataService.generalSettingsData;

  disclaimerData = this.localDataService.disclaimerData;

  dataSource = this.localDataService.templateData;
  foundTemplateIndex: number = -1;

  templateID: string = '';
  currentTemplateID: string = '0'
  templateProviderId: string = '';
  templateType: string = '';
  templateColor: string = '';
  templateColorClass: string = '';
  templateName: string = '';
  templateLogo: string = '';
  logoString: string = '';
  templateSections: any[] = [];
  templateSectionsConverted: any[] = [];
  templateContents: string = '';
  templateCreatedBy: string = '';
  templateCreatedOn: string = '';

  @Input() dealerName: string = this.settingsData[0].dealerName;
  @Input() customerFirstname: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentCustomerForename;
  @Input() ammount: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionTotalIncTax.toString();
  @Input() invoiceNumber: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionNumber;
  @Input() dueDate: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentTransactionExpiry;
  @Input() workCarriedOut: string = this.paymentData[this.applicationModelService.currentPaymentIndexNumber$.getValue()].paymentInvoiceLines;
  @Input() triageDisclaimer: string = this.disclaimerData[0].disclaimerContents;

  workingString: string = '';

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.applicationModelService.currentTemplateIdViewer$.subscribe((newTemplateId) => {
      // Update other variables accordingly
      console.log('current template change occured');
      this.doFindTemplate(newTemplateId);
    });
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    // find and then locally load template data
    // load from local storage
    // if (localStorage.getItem('templateData')) {
    //   const data = localStorage.getItem('templateData');
    //   this.dataSource = (JSON.parse(data as string));
    //   console.log('just loaded this data source into the viewer');
    //   console.log(this.dataSource);
    // } else {
    //   this.dataSource = this.localDataService.templateData;
    // }
    // this.dataSource = this.localDataService.templateData;

  }

  doFindTemplate(templateIDToUse: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateIDToUse);
    if (this.foundTemplateIndex !== -1) {
      console.log('i found the one you want at ' + this.foundTemplateIndex);
      this.doLoadData(this.foundTemplateIndex);
    } else {
      // default I guess
      this.doLoadData(0);
    }
  }

  doLoadData(ind: number) {
    this.templateID = this.dataSource[ind].templateID;
    this.templateProviderId = this.dataSource[ind].templateProviderId;
    this.templateType = this.dataSource[ind].templateType;
    // set the template color
    this.templateColor = this.dataSource[ind].templateColor
    this.templateColorClass = this.doSetTemplateColor(this.templateColor);
    console.log('color should be');
    console.log(this.templateColorClass);
    this.templateName = this.dataSource[ind].templateName;
    //Set the template logo

    this.templateLogo = this.dataSource[ind].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
    this.templateSections = this.dataSource[ind].templateSections;
    this.templateContents = this.dataSource[ind].templateContents;
    this.templateCreatedBy = this.dataSource[ind].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[ind].templateCreatedOn;
    this.doParseRawTemplate();
  }

  doReplaceKeysWithData(ind: number) {
    this.workingString = '';
    this.workingString = this.templateSections[ind].sectionContent;
    this.workingString = this.workingString.replace(/\[dealerName\]/g, this.dealerName);
    this.workingString = this.workingString.replace(/\[customerFirstname\]/g, this.customerFirstname);
    this.workingString = this.workingString.replace(/\[ammount\]/g, this.settingsData[0].currencySymbol +  this.ammount);
    this.workingString = this.workingString.replace(/\[invoiceNumber\]/g, this.invoiceNumber);
    this.workingString = this.workingString.replace(/\[dueDate\]/g, this.dueDate);
    this.workingString = this.workingString.replace(/\[workCarriedOut\]/g, this.workCarriedOut);
    this.workingString = this.workingString.replace(/\[triageDisclaimer\]/g, this.triageDisclaimer);
    return this.workingString
  }

  doParseRawTemplate() {
    this.templateSectionsConverted = [];
    for (let i = 0; i < this.templateSections.length; i++) {
      this.templateSectionsConverted.push({
        sectionId: this.templateSections[i].sectionId,
        sectionContent: this.doReplaceKeysWithData(i),
        sectionContentStyle: this.templateSections[i].sectionContentStyle,
        sectionIndexOrder: this.templateSections[i].sectionIndexOrder,
      });
    }
  }

  doSetTemplateColor(color: string) {
    switch (color) {
      case '0':
        return 'blue'
        break;
      case '1':
        return 'red'
        break;
      case '2':
        return 'green'
        break;
      case '3':
        return 'black'
        break;
      case '4':
        return 'white very-dark-grey-text'
        break;
      default:
        return 'blue'
        break;
    }
}


  ngOnDestroy() {
    // Unsubscribe from the currentTemplateId$ BehaviorSubject
    // this.applicationModelService.currentTemplateIdViewer$.unsubscribe();
  }


  doShowCustomerExperience(ev: any) {
    ev.stopPropagation();
    this.dialog.open(DialogCustomerFormComponent, {
      maxWidth: '800px',
      minWidth: '300px',
      minHeight: '180px',
      maxHeight: '96vh',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }
}
