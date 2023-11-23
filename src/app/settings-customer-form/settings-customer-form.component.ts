import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings-customer-form',
  templateUrl: './settings-customer-form.component.html',
  styleUrls: ['./settings-customer-form.component.scss']
})
export class SettingsCustomerFormComponent {

  templateDataSource = this.localDataService.custTemplateData;
  currentTemplateID: string = '0'

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  onSelectedTemplateChange(id: string) {

  }
}
