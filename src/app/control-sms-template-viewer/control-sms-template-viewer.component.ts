import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-sms-template-viewer',
  templateUrl: './control-sms-template-viewer.component.html',
  styleUrls: ['./control-sms-template-viewer.component.scss']
})
export class ControlSmsTemplateViewerComponent {

  templates = this.localDataService.smsTemplateData;
  sectionContent = this.templates[0].smsTemplateContent;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }
}
