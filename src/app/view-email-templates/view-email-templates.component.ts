import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-email-templates',
  templateUrl: './view-email-templates.component.html',
  styleUrls: ['./view-email-templates.component.scss']
})
export class ViewEmailTemplatesComponent {

  dataSource = this.localDataService.templateData;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  trackByFn(index: number, item: any) {
    return item.sectionId;
  }
}
