import { Component, OnInit } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-phase-i',
  templateUrl: './view-phase-i.component.html',
  styleUrls: ['./view-phase-i.component.scss']
})
export class ViewPhaseIComponent implements OnInit{

  dataItemIndexNo: number = -1;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService,
              public dialog: MatDialog, ) {
  }

  ngOnInit() {
    console.log('phaseI view on init ');
    this.applicationModelService.isUsePhaseIUI$.next(true);
    console.log(this.applicationModelService.currentPaymentIndexNumber$.getValue())
    this.dataItemIndexNo = this.applicationModelService.currentPaymentIndexNumber$.getValue();
  }
}
