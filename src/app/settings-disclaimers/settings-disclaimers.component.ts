import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings-disclaimers',
  templateUrl: './settings-disclaimers.component.html',
  styleUrls: ['./settings-disclaimers.component.scss']
})
export class SettingsDisclaimersComponent {

  disclaimerData = this.localDataService.disclaimerData;

  informationalData = this.localDataService.informationalLinkData;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  doBlur(ev: any) {
    this.disclaimerData[0].disclaimerContents = ev.target.innerHTML;
  }

  doToggleDisclaimerType() {
    this.disclaimerData[0].disclaimerIsLink = !this.disclaimerData[0].disclaimerIsLink;
  }
}
