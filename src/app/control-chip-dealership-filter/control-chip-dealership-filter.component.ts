import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-control-chip-dealership-filter',
  templateUrl: './control-chip-dealership-filter.component.html',
  styleUrls: ['./control-chip-dealership-filter.component.scss']
})
export class ControlChipDealershipFilterComponent {

  filters = this.localDataService.gridFilterItemsData;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService, public dialog: MatDialog, ) {
  }


  onAddFilterChip (id: number, name: string) {
    if (this.filters[0].gridFilterItemID === 0) {
      this.filters = [];
    }
    if (id === 0) {
      this.filters = [];
    }
    this.filters.push({
      gridFilterItemID: id,
      gridFilterItemName: name,});
  }

  doRemoveChip(id: number) {
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].gridFilterItemID === id) {
        this.filters.splice(i, 1);
      }
    }
    if(this.filters.length === 0) {
      this.filters.push({
        gridFilterItemID: 0,
        gridFilterItemName: 'All',});
    }
  }
}
