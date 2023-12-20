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
import { DialogEmailExampleComponent } from "../dialog-email-example/dialog-email-example.component";

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
  emails = this.localDataService.emailSettingData;
  selectedEmailID: string = '0';

  templateColors = this.localDataService.colorSchemeData;
  selectedColor: string = '0';

  dealers = this.localDataService.dealerData;
  selectedDealer: string = '0';

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

  emailSubject: string = "Invoice XXX-NNNNN for Future Motors Ltd";

  isNew: boolean = false;
  previousLoadedTemplate: string = '';

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
    this.applicationModelService.currentTemplateIdViewer$.next(this.applicationModelService.currentTemplateIdViewer$.getValue());
  }

  doCancel() {
    if(this.isNew) {
      this.dataSource.pop();
      this.isNew = false;
      this.applicationModelService.currentTemplateIdViewer$.next(this.previousLoadedTemplate);
      this.doFindTemplate(this.previousLoadedTemplate);
      this.currentTemplateID = this.previousLoadedTemplate;
    }
    this.showViewer = !this.showViewer;
    this.applicationModelService.currentTemplateIdViewer$.next(this.applicationModelService.currentTemplateIdViewer$.getValue());
  }

  onSelectedTemplateChange(ind: string) {
    this.applicationModelService.currentTemplateIdViewer$.next(this.currentTemplateID);
    this.doFindTemplate(this.currentTemplateID);
  }


  onSelectedSourceChange(selectedSauceID: string) {
    this.dataSource[this.foundTemplateIndex].templateSourceApplication = selectedSauceID;
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

  doNew() {
    const templateId = (this.dataSource.length).toString();
    this.previousLoadedTemplate = this.dataSource[this.foundTemplateIndex].templateID;
    this.isNew = true;
    this.dataSource.push(
      {
        templateID: templateId,
        templateProviderId: '0',
        templateType: 'email',
        templateSourceApplication: '0',
        templateEmailSourceID: '0',
        templateColor: '0',
        templateName: 'New Template',
        templateLogo: 'future-motors',
        templateSections: this.localDataService.emptySections,
        templateContents: 'deprecated field',
        templateCreatedBy: 'Martin Tudor Reed',
        templateCreatedOn: '05/02/2032',
    }
    );
    this.applicationModelService.currentTemplateIdViewer$.next(templateId);
    this.doFindTemplate(templateId);
    this.currentTemplateID = templateId;
    this.doToggleViewer();
  }

  onSelectedEmailChange(id: string) {
    this.dataSource[this.foundTemplateIndex].templateEmailSourceID = id;
  }

  onSelecteddealerChange(dlr: string) {

  }

  doPsuedoSend() {
    this.dialog.open(DialogEmailExampleComponent, {
      maxWidth: '98%',
      minWidth: '98%',
      minHeight: '96vh',
      maxHeight: '98%',
      panelClass: 'ifm-dialog',
      autoFocus: false,
      data: {
        isShowAttachments: false,
        isInFullScreenViewer: true,
      }
    });
  }

}
