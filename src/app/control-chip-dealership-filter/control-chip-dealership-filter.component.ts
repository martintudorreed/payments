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

  filters = this.localDataService.dealershipFilterItemsData;

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
      dealershipFilterItemID: 0,
      dealershipFilterItemName: 'All',});
    this.applicationModelService.chipFilterStatusIsSet$.next(false);
  }


  onAddFilterChip (id: number, name: string) {
    if (this.filters[0].dealershipFilterItemID === 0) {
      this.filters = [];
    }
    if (id === 0) {
      this.filters = [];
    }
    this.filters.push({
      dealershipFilterItemID: id,
      dealershipFilterItemName: name,});
    this.applicationModelService.chipFilterStatusIsSet$.next(true);
  }

  doRemoveChip(ev: any, id: number) {
    ev.stopPropagation();
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].dealershipFilterItemID === id) {
        this.filters.splice(i, 1);
      }
    }
    if(this.filters.length === 0) {
      this.filters.push({
        dealershipFilterItemID: 0,
        dealershipFilterItemName: 'All',});
      this.applicationModelService.chipFilterStatusIsSet$.next(false);
    }
  }


}
