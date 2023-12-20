import {Component, Input, AfterViewInit, OnInit} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-editable-sms-template',
  templateUrl: './control-editable-sms-template.component.html',
  styleUrls: ['./control-editable-sms-template.component.scss']
})
export class ControlEditableSmsTemplateComponent {

  smsTemplates = this.localDataService.smsTemplateData;
  currentTemplateID: string = '0';
  currentTemplateIndex: number = 0;
  numberOfCharactersUsed: number = 0;
  isEditMode: boolean = false;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }



  handleCharsInSMS(chars: number) {
    console.log('emit');
    this.numberOfCharactersUsed = chars;
  }

  doToggleEitMode() {
    this.isEditMode = !this.isEditMode;
  }

  onSelectedTemplateChange(id: string) {
    // this.currentTemplateIndex = this.smsTemplates.findIndex(template => template.smsTemplateID === id);
    // this.applicationModelService.currentDisclaimerIndexNumber$.next(this.currentDisclaimerIndex);
  }

  doNew() {

  }

  doPsuedoSend() {

  }

}
