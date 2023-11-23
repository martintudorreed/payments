import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-email-details',
  templateUrl: './control-email-details.component.html',
  styleUrls: ['./control-email-details.component.scss']
})
export class ControlEmailDetailsComponent {

   emailDataSource = this.localDataService.emailSettingData;

    constructor(private localDataService: LocalDataService,
                public dialog: MatDialog,
                public applicationModelService: ApplicationModelService,
                private _snackBar: MatSnackBar,
                private router: Router) {
    }
}
