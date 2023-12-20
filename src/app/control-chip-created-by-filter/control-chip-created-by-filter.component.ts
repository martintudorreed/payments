import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-control-chip-created-by-filter',
  templateUrl: './control-chip-created-by-filter.component.html',
  styleUrls: ['./control-chip-created-by-filter.component.scss']
})
export class ControlChipCreatedByFilterComponent {

  filters = this.localDataService.createdByFilterItemsData;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService, public dialog: MatDialog, ) {

    this.applicationModelService.triggerToClearChipLists$.subscribe((clearTriggerFired) => {
      // This is the trigger that is montored to clear all filter chips
      if(this.applicationModelService.triggerToClearChipLists$.getValue()) {
        this.doClearList();
      }
    });
  }
  doClearList() {
    this.filters.length = 0;
    this.filters.push({
      createdByFilterItemID: 0,
      createdByFilterItemName: 'All',});
    this.applicationModelService.chipFilterStatusIsSet$.next(false);
  }

  onAddFilterChip (id: number, name: string) {
    if (this.filters[0].createdByFilterItemID === 0) {
      this.filters = [];
    }
    if (id === 0) {
      this.filters = [];
    }
    this.filters.push({
      createdByFilterItemID: id,
      createdByFilterItemName: name,});
    this.applicationModelService.chipFilterStatusIsSet$.next(true);
  }

  doRemoveChip(ev: any,id: number) {
    ev.stopPropagation();
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].createdByFilterItemID === id) {
        this.filters.splice(i, 1);
      }
    }
    if(this.filters.length === 0) {
      this.filters.push({
        createdByFilterItemID: 0,
        createdByFilterItemName: 'All',});
      this.applicationModelService.chipFilterStatusIsSet$.next(false);
    }
  }
}
