import {Component, Input, OnInit} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy } from '@angular/core';
import {CdkContextMenuTrigger, CdkMenuItem, CdkMenu} from '@angular/cdk/menu';

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
  templateColor: string = '';
  templateColorClass: string = '';

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
    this.templateColor = this.dataSource[ind].templateColor
    this.templateColorClass = this.doSetTemplateColor(this.templateColor);
    this.logoString = this.doGetImageSrcString(this.templateLogo);
    this.templateContents = this.dataSource[ind].templateContents;
    this.templateCreatedBy = this.dataSource[ind].templateCreatedBy;
    this.templateCreatedOn = this.dataSource[ind].templateCreatedOn;

    this.templateSections = [];
    this.templateSections = this.dataSource[ind].templateSections;
  }

  doSetTemplateColor(color: string) {
    switch (color) {
      case '0':
        return 'blue'
        break;
      case '1':
        return 'red'
        break;
      case '2':
        return 'green'
        break;
      case '3':
        return 'black'
        break;
      case '4':
        return 'white very-dark-grey-text'
        break;
      default:
        return 'blue'
        break;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.templateSections, event.previousIndex, event.currentIndex);
    console.log(this.templateSections);
    this.doSave();
  }

  doAddRow(key: string) {
    const newSectionId = this.dataSource[this.selectedTemplate].templateSections.length.toString();


    this.dataSource[this.selectedTemplate].templateSections.push({
      sectionId: newSectionId,
      sectionContent: key,
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
    this.logoString = this.doGetImageSrcString(brand);
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

  doGetImageSrcString(imgName: string ) {
    if (imgName === 'currentLogo') {
      return './assets/svg-logos/' + this.applicationModelService.selectedThemeBrand$.getValue() + '-logo.svg';
    } else {
      return './assets/svg-logos/' + imgName + '-logo.svg';
    }
  }

 insertText(text: string, ind: number) {
    // Get the content-editable element
   const editableElId = `editableSection${ind}`;

   // Get the content-editable element by its dynamic ID
   const editableEl = document.getElementById(editableElId);

    // Get the current selection
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return; // No selection available

    const range = selection.getRangeAt(0);
    range.deleteContents(); // Delete selected text if any

    // Create a text node for the new text and insert it
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    // Move the cursor after the inserted text
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    // Focus back on the content-editable element
    editableEl?.focus();
  }


}
