import {Component, Input, OnInit} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-control-template-editor',
  templateUrl: './control-template-editor.component.html',
  styleUrls: ['./control-template-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlTemplateEditorComponent implements OnInit{
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;

  sourceApp = this.localDataService.ifmAppData;
  selectedSauceID: string = '';

  dataSource = this.localDataService.templateData;
  foundTemplateIndex: number = -1;
  selectedTemplate: number = 0;

  brands = this.localDataService.themeBrandData;
  images = this.localDataService.imageLibraryData;

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

  showViewer: boolean = true;
  dataSourceFromLocal: any[] = [];

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

  ngOnInit() {
    this.doFindTemplate(this.applicationModelService.currentTemplateIdViewer$.getValue());
  }

  doFindTemplate(templateIDToUse: string) {
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateIDToUse);
    if (this.foundTemplateIndex !== -1) {
      console.log('i found the one you want at ' + this.foundTemplateIndex);
      this.selectedTemplate = this.foundTemplateIndex;
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
    this.templateName = this.dataSource[ind].templateName;
    this.templateLogo = this.dataSource[ind].templateLogo;
    this.logoString = "./assets/svg-logos/" + this.templateLogo + '-logo.svg';
    this.templateContents = this.dataSource[ind].templateContents;
    this.templateCreatedBy = this.dataSource[ind].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[ind].templateCreatedOn;

    this.templateSections = [];
    this.templateSections = this.dataSource[ind].templateSections;

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


}
