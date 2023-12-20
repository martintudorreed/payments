import { Component, EventEmitter, Output } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-control-chip-filter',
  templateUrl: './control-chip-filter.component.html',
  styleUrls: ['./control-chip-filter.component.scss']
})
export class ControlChipFilterComponent {

  @Output() isStatusFilterSet: EventEmitter<boolean> = new EventEmitter();

  filters = this.localDataService.statusFilterItemsData;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService, public dialog: MatDialog, ) {
    this.applicationModelService.triggerToClearChipLists$.subscribe((clearTriggerFired) => {
      // This is the trigger that is montored to clear all filter chips
      if(this.applicationModelService.triggerToClearChipLists$.getValue()) {
        this.doClearList();
      }
    });
  }

  onAddFilterChip (id: number, name: string) {
    if (this.filters[0].statusFilterItemID === 0) {
      this.filters = [];
    }
    if (id === 0) {
      this.filters = [];
    }
    this.filters.push({
      statusFilterItemID: id,
      statusFilterItemName: name,});
    this.applicationModelService.chipFilterStatusIsSet$.next(true);
  }

  doRemoveChip(ev: any,id: number) {
    ev.stopPropagation();
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].statusFilterItemID === id) {
        this.filters.splice(i, 1);
      }
    }
    if(this.filters.length === 0) {
      this.filters.push({
        statusFilterItemID: 0,
        statusFilterItemName: 'All',});
      this.applicationModelService.chipFilterStatusIsSet$.next(false);
    }
  }

  doClearList() {
    this.filters.length = 0;
    this.filters.push({
      statusFilterItemID: 0,
      statusFilterItemName: 'All',});
    this.applicationModelService.chipFilterStatusIsSet$.next(false);
  }

  doCheckIfFilterSet() {
    if(this.filters.length === 1) {
      if (this.filters[0].statusFilterItemID === 0) {
        this.isStatusFilterSet.emit(false);
      } else {
        this.isStatusFilterSet.emit(true);
      }
    }

  }
}

