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

  disclaimerData = this.localDataService.disclaimerData;
  currentDisclaimerID: string = '0';
  currentDisclaimerIndex: number = 0;
  numberOfCharactersUsed: number = 0;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  doBlur(ev: any) {
    this.disclaimerData[this.currentDisclaimerIndex].disclaimerContents = ev.target.innerHTML;
  }

  doToggleDisclaimerType() {
    this.disclaimerData[this.currentDisclaimerIndex].disclaimerIsLink = !this.disclaimerData[this.currentDisclaimerIndex].disclaimerIsLink;
  }

  onSelectedDisclaimerChange(id: string) {
    this.currentDisclaimerIndex = this.disclaimerData.findIndex(disclaimer => disclaimer.disclaimerId === id);
    this.applicationModelService.currentDisclaimerIndexNumber$.next(this.currentDisclaimerIndex);
  }

  handleCharsInSMS(chars: number) {
    console.log('emit');
    this.numberOfCharactersUsed = chars;
  }

}
