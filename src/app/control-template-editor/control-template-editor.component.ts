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
  @Input() templateIDToUse: string = '0'
  dataSource: any[] = [];
  brands = this.localDataService.themeBrandData;
  selectedTemplate: number = 0;
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

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
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
    this.foundTemplateIndex = this.dataSource.findIndex(template => template.templateID === templateIDToUse);
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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.templateSections, event.previousIndex, event.currentIndex);
    console.log(this.templateSections);
    this.doSave();
  }

  doBlur(ev: any, ind: number) {
    this.dataSource[0].templateSections[ind].sectionContent = ev.target.innerHTML;
    this.doSave();
  }

  doChangeLogo(brand: string) {
    this.logoString = "./assets/svg-logos/" + brand + '-logo.svg';
    this.doSave();
  }

  doSetStyle(style: string, sectionNo: number) {
    this.dataSource[0].templateSections[sectionNo].sectionContentStyle = style;
    this.doSave();
  }

  doDeleteRow(ind: number) {
    this.dataSource[0].templateSections.splice(ind, 1);
  }

  doSave() {
    localStorage.setItem('templateData', JSON.stringify(this.dataSource));
  }


}
