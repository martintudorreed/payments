import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CdkDragDrop, CdkDropList, CdkDrag, CdkDragHandle, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { List } from 'immutable';
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

  dataSource: any[] = [];
  brands = this.localDataService.themeBrandData;
  selectedTemplate: number = 0;

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

  showViewer: boolean = false;
  dataSourceFromLocal: any[] = [];

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    // load from local storage
    if (localStorage.getItem('templateData')) {
      const data = localStorage.getItem('templateData');
      this.dataSource = (JSON.parse(data as string));
    } else {
      this.dataSource = this.localDataService.templateData;
    }
    this.templateID = this.dataSource[0].templateID;
    this.templateProviderId = this.dataSource[0].templateProviderId;
    this.templateType = this.dataSource[0].templateType;
    this.templateName = this.dataSource[0].templateName;
    this.templateLogo = this.dataSource[0].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
    this.templateSections = this.dataSource[0].templateSections;
    this.templateContents = this.dataSource[0].templateContents;
    this.templateCreatedBy = this.dataSource[0].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[0].templateCreatedOn;

    console.log('after view inti datasource is');
    console.log(this.dataSource);
  }

  ngAfterViewInit() {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.templateSections, event.previousIndex, event.currentIndex);
    console.log(this.templateSections);
    this.doSave();
  }

  doAddRow() {
    const newSectionId = this.dataSource[0].templateSections.length.toString();
    console.log('new section is ' + newSectionId);
    this.dataSource[0].templateSections.push({
      sectionId: newSectionId,
      sectionContent: 'New Email Line - click to edit',
      sectionContentStyle: '',
      sectionIndexOrder: -1
    });
  }

  doDeleteRow(ind: number) {
    this.dataSource[0].templateSections.splice(ind, 1);
  }

  doSaveLocally() {
    const numberOfElements = (this.dataSource.length).toString();
    this.dataSource.push({
      templateID: numberOfElements,
      templateProviderId: this.templateProviderId,
      templateType: this.templateType,
      templateName: this.templateName,
      templateLogo: this.templateLogo,
      templateSections: this.templateSections,
      templateContents: this.templateContents,
      templateCreatedBy: this.templateCreatedBy,
      templateCreatedOn: this.templateCreatedOn,
    })
    this.doSave();
  }

  doSave() {
    localStorage.setItem('templateData', JSON.stringify(this.dataSource));
  }

  doChangeLogo(brand: string) {
    this.logoString = "./assets/svg-logos/" + brand + '-logo.svg';
    this.doSave();
  }

  doSetStyle(style: string, sectionNo: number) {
    this.dataSource[0].templateSections[sectionNo].sectionContentStyle = style;
    this.doSave();
  }

  doGetContents() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      console.log(this.dataSource[0].templateSections[i].sectionContent);
    }
  }

  doBlur(ev: any, ind: number) {
    this.dataSource[0].templateSections[ind].sectionContent = ev.target.innerHTML;
    this.doSave();
  }

  doReplaceKeysWithDataValues() {
    for (let i = 0; i < this.dataSource[0].templateSections.length; i++) {
      // look for the a key match in the contents and replace it with correcponding value
    }
  }

  doToggleViewer() {
    this.doSave();
    this.showViewer = !this.showViewer;
  }

  onSelectedTemplateChange(ind: number) {
    console.log('gonna change to ' + ind)
    this.templateID = this.dataSource[ind].templateID;
    this.currentTemplateID = this.templateID;
    this.templateProviderId = this.dataSource[ind].templateProviderId;
    this.templateType = this.dataSource[ind].templateType;
    this.templateName = this.dataSource[ind].templateName;
    this.templateLogo = this.dataSource[ind].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
    this.templateSections = this.dataSource[ind].templateSections;
    this.templateContents = this.dataSource[ind].templateContents;
    this.templateCreatedBy = this.dataSource[ind].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[ind].templateCreatedOn;
    console.log('when I toggle the view I will be sending ' + this.currentTemplateID)
  }

}
