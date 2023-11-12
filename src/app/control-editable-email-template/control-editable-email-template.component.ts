import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CdkDragDrop, CdkDropList, CdkDrag, CdkDragHandle, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { List } from 'immutable';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-control-editable-email-template',
  templateUrl: './control-editable-email-template.component.html',
  styleUrls: ['./control-editable-email-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlEditableEmailTemplateComponent implements OnInit, AfterViewInit{
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;

  sourceApp = this.localDataService.ifmAppData;
  selectedSauceID: string = '';
  dataSource = this.localDataService.templateData;
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
    // // load from local storage
    // if (localStorage.getItem('templateData')) {
    //   const data = localStorage.getItem('templateData');
    //   this.dataSource = (JSON.parse(data as string));
    // } else {
    //   this.dataSource = this.localDataService.templateData;
    // }
    this.templateID = this.dataSource[this.selectedTemplate].templateID;
    this.templateLogo = this.dataSource[this.selectedTemplate].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';

    this.templateName = this.dataSource[this.selectedTemplate].templateName;

    this.templateSections = this.dataSource[this.selectedTemplate].templateSections;
    this.selectedSauceID = this.dataSource[this.selectedTemplate].templateSourceApplication;
      // this.templateProviderId = this.dataSource[this.selectedTemplate].templateProviderId;
    // this.templateType = this.dataSource[this.selectedTemplate].templateType;
    // this.templateContents = this.dataSource[this.selectedTemplate].templateContents;
    // this.templateCreatedBy = this.dataSource[this.selectedTemplate].templateCreatedBy;
    // this.templateCreatedOn = this.dataSource[this.selectedTemplate].templateCreatedOn;

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
    const newSectionId = this.dataSource[this.selectedTemplate].templateSections.length.toString();
    console.log('new section is ' + newSectionId);
    this.dataSource[this.selectedTemplate].templateSections.push({
      sectionId: newSectionId,
      sectionContent: 'New Email Line - click to edit',
      sectionContentStyle: '',
      sectionIndexOrder: -1
    });
  }

  doDeleteRow(ind: number) {
    this.templateSections.splice(ind, 1);
    this.doSave();
  }

  doSaveLocally() {
    // const numberOfElements = (this.dataSource.length).toString();
    // this.dataSource.push({
    //   templateID: numberOfElements,
    //   templateProviderId: this.templateProviderId,
    //   templateType: this.templateType,
    //   templateName: this.templateName,
    //   templateLogo: this.templateLogo,
    //   templateSections: this.templateSections,
    //   templateContents: this.templateContents,
    //   templateCreatedBy: this.templateCreatedBy,
    //   templateCreatedOn: this.templateCreatedOn,
    // })
    // this.doSave();
  }

  doSave() {
    // localStorage.setItem('templateData', JSON.stringify(this.dataSource));
    // console.log('after save this is the dataset');
    // console.log(this.dataSource);
  }

  doChangeLogo(brand: string) {
    this.logoString = "./assets/svg-logos/" + brand + '-logo.svg';
    this.dataSource[this.selectedTemplate].templateLogo = brand;
    this.doSave();
  }

  doSetStyle(style: string, sectionNo: number) {
    this.dataSource[this.selectedTemplate].templateSections[sectionNo].sectionContentStyle = style;
    this.doSave();
  }

  doGetContents() {
    for (let i = 0; i < this.dataSource[this.selectedTemplate].templateSections.length; i++) {
      console.log(this.dataSource[this.selectedTemplate].templateSections[i].sectionContent);
    }
  }

  doBlur(ev: any, ind: number) {
    this.dataSource[this.selectedTemplate].templateSections[ind].sectionContent = ev.target.innerHTML;
    this.doSave();
  }

  doReplaceKeysWithDataValues() {
    for (let i = 0; i < this.dataSource[this.selectedTemplate].templateSections.length; i++) {
      // look for the a key match in the contents and replace it with correcponding value
    }
  }

  doToggleViewer() {
    this.doSave();
    this.showViewer = !this.showViewer;
  }

  onSelectedTemplateChange(ind: number) {
    console.log('gonna change to ' + ind)
    console.log('using this dataset');
    console.log(this.dataSource);
    this.selectedTemplate = ind;
    this.templateID = this.dataSource[this.selectedTemplate].templateID;
    this.templateLogo = this.dataSource[this.selectedTemplate].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';

    this.templateName = this.dataSource[this.selectedTemplate].templateName;

    this.templateSections = this.dataSource[this.selectedTemplate].templateSections;
    console.log('when I toggle the view I will be sending ' + this.currentTemplateID);
  }

  trackByFn(index: number, item: any) {
    return item.sectionId;
  }

  onSelectedSourceChange(selectedSauceID: string) {

  }


}
