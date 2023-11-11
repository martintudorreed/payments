import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
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
export class ControlEditableEmailTemplateComponent implements OnInit, AfterViewInit{
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
  templateSectionsConverted: any[] = [];
  templateContents = this.dataSource[0].templateContents;
  templateCreatedBy = this.dataSource[0].templateCreatedBy;
  templateCreatedOn = this.dataSource[0].templateCreatedOn;

  showViewer: boolean = false;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // if (localStorage.getItem('templateData')) {
    //   console.log('anything in here');
    //   const data = localStorage.getItem('templateData');
    //   this.dataSource = (JSON.parse(data as string));
    // }
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

  doSaveLocally() {
    localStorage.setItem('templateData', JSON.stringify(this.dataSource));
  }

  doChangeLogo(brand: string) {
    this.logoString = "./assets/svg-logos/" + brand + '-logo.svg';
  }

  doSetStyle(style: string, sectionNo: number) {
    this.dataSource[0].templateSections[sectionNo].sectionContentStyle = style;
  }

  doGetContents() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      console.log(this.dataSource[0].templateSections[i].sectionContent);
    }
  }

  doBlur(ev: any, ind: number) {
    this.dataSource[0].templateSections[ind].sectionContent = '';
    this.dataSource[0].templateSections[ind].sectionContent = ev.target.innerHTML;
  }

  doReplaceKeysWithDataValues() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      // look for the a key match in the contents and replace it with correcponding value
    }
  }

  doToggleViewer() {
    this.showViewer = !this.showViewer;
  }

}
