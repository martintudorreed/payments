import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-control-chip-ifm-apps',
  templateUrl: './control-chip-ifm-apps.component.html',
  styleUrls: ['./control-chip-ifm-apps.component.scss']
})
export class ControlChipIfmAppsComponent {

  filters = this.localDataService.templateFilterItemsData;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService, public dialog: MatDialog, ) {
  }

  onAddFilterChip (id: number, name: string) {
    if (this.filters[0].templateFilterItemID === 0) {
      this.filters = [];
    }
    if (id === 0) {
      this.filters = [];
    }
    this.filters.push({
      templateFilterItemID: id,
      templateFilterItemName: name,});
  }

  doRemoveChip(id: number, ev: any) {
    ev.stopPropagation();
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].templateFilterItemID === id) {
        this.filters.splice(i, 1);
      }
    }
    if(this.filters.length === 0) {
      this.filters.push({
        templateFilterItemID: 0,
        templateFilterItemName: 'All',});
    }
  }
}
