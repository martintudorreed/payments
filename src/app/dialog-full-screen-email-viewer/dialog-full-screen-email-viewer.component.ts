import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-full-screen-email-viewer',
  templateUrl: './dialog-full-screen-email-viewer.component.html',
  styleUrls: ['./dialog-full-screen-email-viewer.component.scss']
})
export class DialogFullScreenEmailViewerComponent {
  selectedTemplate: string = this.applicationModelService.currentTemplateIdViewer$.getValue();

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }
}
