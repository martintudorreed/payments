import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-template-viewer',
  templateUrl: './control-template-viewer.component.html',
  styleUrls: ['./control-template-viewer.component.scss']
})
export class ControlTemplateViewerComponent implements OnInit, AfterViewInit{
  @Input() templateIDToUse: string = '0'
  dataSource: any[] = [];
  foundTemplateIndex: number = -1;

  templateID: string = '';
  currentTemplateID: string = '0'
  templateProviderId: string = '';
  templateType: string = '';
  templateName: string = '';
  templateLogo: string = '';
  logoString: string = '';
  templateSections: any[] = [];
  templateSectionsConverted: any[] = [];
  templateContents: string = '';
  templateCreatedBy: string = '';
  templateCreatedOn: string = '';

  @Input() dealerName: string = 'Future Motors Ltd';
  @Input() ammount: string = '$88.88';
  @Input() invoiceNumber: string = 'INV-888-8-88';
  @Input() dueDate: string = '05/02/3032';
  @Input() workCarriedOut: string = 'Carried out 32,000km Service as per owners manual.';

  workingString: string = '';

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    // find and then locally load template data
    // load from local storage
    if (localStorage.getItem('templateData')) {
      const data = localStorage.getItem('templateData');
      this.dataSource = (JSON.parse(data as string));
      console.log('just loaded this data source into the viewer');
      console.log(this.dataSource);
    } else {
      this.dataSource = this.localDataService.templateData;
    }
    this.doFindTemplate(this.templateIDToUse);
  }

  doFindTemplate(templateIDToUse: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateIDToUse === templateIDToUse);
    if (this.foundTemplateIndex !== -1) {
      console.log('i found the one you want at ' + this.foundTemplateIndex);
      this.doLoadData(this.foundTemplateIndex);
    } else {
      // default I guess
      this.doLoadData(0);
      console.log('no fine ??????');
    }
  }

  doLoadData(ind: number) {
    this.templateID = this.dataSource[ind].templateID;
    this.templateProviderId = this.dataSource[ind].templateProviderId;
    this.templateType = this.dataSource[ind].templateType;
    this.templateName = this.dataSource[ind].templateName;
    this.templateLogo = this.dataSource[ind].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
    this.templateSections = this.dataSource[ind].templateSections;
    this.templateContents = this.dataSource[ind].templateContents;
    this.templateCreatedBy = this.dataSource[ind].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[ind].templateCreatedOn;
    this.doParseRawTemplate();
  }

  doParseRawTemplate() {
    for (let i = 0; i < this.templateSections.length; i++) {
      this.templateSectionsConverted.push({
        sectionId: this.templateSections[i].sectionId,
        sectionContent: this.doReplaceKeysWithData(i),
        sectionContentStyle: this.templateSections[i].sectionContentStyle,
        sectionIndexOrder: this.templateSections[i].sectionIndexOrder,
      });
    }
  }

  doReplaceKeysWithData(ind: number) {
    this.workingString = this.templateSections[ind].sectionContent;
    this.workingString = this.workingString.replace(/\[dealerName\]/g, this.dealerName);
    this.workingString = this.workingString.replace(/\[ammount\]/g, this.ammount);
    this.workingString = this.workingString.replace(/\[invoiceNumber\]/g, this.invoiceNumber);
    this.workingString = this.workingString.replace(/\[dueDate\]/g, this.dueDate);
    this.workingString = this.workingString.replace(/\[workCarriedOut\]/g, this.workCarriedOut);
    return this.workingString
  }

  // [dealerName]
  // [ammount]
  // [invoiceNumber]
  // [dueDate]
  // [workCarriedOut]
}
