import { Component, Input, OnInit } from '@angular/core';
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
export class ControlTemplateViewerComponent implements OnInit{
  @Input() templateID: string = '0'
  dataSource = this.localDataService.templateData;
  foundTemplateIndex: number = -1;

  templateIDA = this.dataSource[0].templateID;
  templateProviderId = this.dataSource[0].templateProviderId;
  templateType = this.dataSource[0].templateType;
  templateName = this.dataSource[0].templateName;
  templateLogo = this.dataSource[0].templateLogo;
  logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
  templateSections = this.dataSource[0].templateSections;
  templateSectionsConverted: any[] = [];
  templateContents = this.dataSource[0].templateContents;
  templateCreatedBy = this.dataSource[0].templateCreatedBy;
  templateCreatedOn = this.dataSource[0].templateCreatedOn;

  @Input() dealerName: string = 'Future Motors Ltd';
  @Input() ammount: string = '$88.88';
  @Input() invoiceNumber: string = 'INV-888-8-88';
  @Input() dueDate: string = '05/02/3032';
  @Input() workCarriedOut: string = 'Tightened all loose nuts and greased where necessary.';

  workingString: string = '';

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    // find and then locally load template data
    this.doFindTemplate(this.templateID);
  }

  doFindTemplate(templateID: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateID);
    if (this.foundTemplateIndex !== -1) {
      this.doLoadData(this.foundTemplateIndex);
    } else {
      // default I guess
      this.doLoadData(0);
    }
  }

  doLoadData(ind: number) {
    this.templateIDA = this.dataSource[ind].templateID;
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
