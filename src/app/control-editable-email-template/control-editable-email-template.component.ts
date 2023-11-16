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
export class ControlEditableEmailTemplateComponent {
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;

  sourceApp = this.localDataService.ifmAppData;
  selectedSauceID: string = '0';
  dataSource = this.localDataService.templateData;
  selectedTemplate: number = 0;
  templateSections = this.dataSource[this.selectedTemplate].templateSections;
  brands = this.localDataService.themeBrandData;

  templateColors = this.localDataService.colorSchemeData;
  selectedColor: string = '0';

  templateID: string = '';
  currentTemplateID: string = '0'
  templateProviderId: string = '';
  templateType: string = '';
  templateName: string = '';
  templateLogo: string = '';
  logoString: string = '';
  // templateSections: any[] = [];
  templateSectionsConverted: any[] = [];
  templateContents: string = '';
  templateCreatedBy: string = '';
  templateCreatedOn: string = '';

  foundTemplateIndex: number = 0;

  showViewer: boolean = true;
  dataSourceFromLocal: any[] = [];

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    this.doFindTemplate(this.applicationModelService.currentTemplateId$.getValue());
    this.currentTemplateID = this.applicationModelService.currentTemplateIdViewer$.getValue();
  }

  doToggleViewer() {
    this.showViewer = !this.showViewer;
  }

  onSelectedTemplateChange(ind: string) {
    this.applicationModelService.currentTemplateIdViewer$.next(this.currentTemplateID);
    this.doFindTemplate(this.currentTemplateID);
  }


  onSelectedSourceChange(selectedSauceID: string) {

  }

  doFindTemplate(templateIDToUse: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateIDToUse);
  }

  doNewTemplate() {

  }

  doGetTemplateSourceApplication(ind: string) {
    if(ind === '0') {
      return 'Triage';
    }
    if(ind === '1') {
      return 'Menus';
    }
    if(ind === '2') {
      return 'EPC';
    }
    if(ind === '3') {
      return 'Ad Hoc';
    } else {
      return 'Ad Hoc';
    }
  }

  onSelectedColorChange(color: string) {
    this.dataSource[this.foundTemplateIndex].templateColor = color;
    this.applicationModelService.currentTemplateIdViewer$.next(this.applicationModelService.currentTemplateIdViewer$.getValue());
  }
  doFullScreen() {

  }


}
