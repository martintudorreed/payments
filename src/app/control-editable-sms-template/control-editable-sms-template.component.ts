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
export class ControlEditableSmsTemplateComponent implements AfterViewInit, OnInit{

  templates = this.localDataService.smsTemplateData;
  sectionContent = this.templates[0].smsTemplateContent;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
