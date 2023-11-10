import { Component, Input } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CdkDragDrop, CdkDropList, CdkDrag, CdkDragHandle, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-control-editable-email-template',
  templateUrl: './control-editable-email-template.component.html',
  styleUrls: ['./control-editable-email-template.component.scss']
})
export class ControlEditableEmailTemplateComponent {
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;

  dataSource = this.localDataService.templateData;
  brands = this.localDataService.themeBrandData;
  selectedTemplate: string = '0';

  templateID = this.dataSource[0].templateID;
  templateProviderId = this.dataSource[0].templateProviderId;
  templateType = this.dataSource[0].templateType;
  templateName = this.dataSource[0].templateName;
  templateLogo = this.dataSource[0].templateLogo;
  logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
  templateSections = this.dataSource[0].templateSections;
  templateContents = this.dataSource[0].templateContents;
  templateCreatedBy = this.dataSource[0].templateCreatedBy;
  templateCreatedOn = this.dataSource[0].templateCreatedOn;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.templateSections, event.previousIndex, event.currentIndex);
  }


  doAddRow() {
    const newSectionId = this.dataSource[0].templateSections.length.toString();
    console.log('new section is ' + newSectionId);
    this.dataSource[0].templateSections.push({
      sectionId: newSectionId,
      sectionContent: 'New Email Line - click to edit',
      sectionContentStyle: ''
    });
  }

  doDeleteRow(ind: number) {
    this.dataSource[0].templateSections.splice(ind, 1);
  }

  doChangeLogo(brand: string) {
    this.logoString = "./assets/svg-logos/" + brand + '-logo.svg';
  }

  doGetContents() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      console.log(this.dataSource[0].templateSections[i].sectionContent);
    }
  }

  doBlur(ev: any, ind: number) {
    this.dataSource[0].templateSections[ind].sectionContent = '';


    const content = ev.target.innerText; // Get the plain text

    console.log('inner is ' + content);

    const contentWithNewlines = content.replace(/\n/g, '[NEWLINE]');

    console.log('replacing new line looks like this' + contentWithNewlines);

    const contentFromStorage = contentWithNewlines.replace(/\[NEWLINE\]/g, '\n');

    console.log('and then back again' + contentWithNewlines);
    this.dataSource[0].templateSections[ind].sectionContent = contentWithNewlines;


// Store contentWithNewlines in your array or database as a string
  }

  doReplaceKeysWithDataValues() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      // look for the a key match in the contents and replace it with correcponding value
    }
  }

}
