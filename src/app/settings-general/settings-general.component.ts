import { Component, Input, OnInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit{
  dataSource: any[] = [];

  defaultLogo: string = 'nissan';

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    // find and then locally load template data
    // load from local storage
    // if (localStorage.getItem('generalSettings')) {
    //   const data = localStorage.getItem('generalSettings');
    //   this.dataSource = (JSON.parse(data as string));
    //   console.log('just loaded this data source into the viewer');
    //   console.log(this.dataSource);
    // } else {
    //   this.dataSource = this.localDataService.generalSettingsData;
    //   localStorage.setItem('generalSettings', JSON.stringify(this.dataSource));
    //   const data = localStorage.getItem('generalSettings');
    //   this.dataSource = (JSON.parse(data as string));
    //   console.log('just loaded this data source into the viewer');
    //   console.log(this.dataSource);
    // }
    this.dataSource = this.localDataService.generalSettingsData;

  }
}
