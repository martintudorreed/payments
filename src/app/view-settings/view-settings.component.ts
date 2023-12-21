import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.scss']
})
export class ViewSettingsComponent {
  selectedAppHeader: string = '-1';

  ifmAppData = this.localDataService.ifmAppData;

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService ) {
  }

  doClose() {
    this.applicationModelService.isSidenavActive$.next(false);
  }

  onTabSelected(ev: any) {
    this.applicationModelService.activeSettingsUITab$.next(ev.index);
  }

  doToggleTwoWayMenu() {
    this.applicationModelService.isShow2WayMenu$.next(!this.applicationModelService.isShow2WayMenu$.getValue());
  }

  doToggleDashboardTab() {
    this.applicationModelService.isShowDashboard$.next(!this.applicationModelService.isShowDashboard$.getValue());
  }

  doChangeHeader(hd: string) {
    this.applicationModelService.activeHeader$.next(hd);
  }

  onSelectedHeaderChange(id: string) {
    this.applicationModelService.activeHeader$.next(id);
    this.selectedAppHeader = id;
    if (id === '0') {
      this.applicationModelService.isShowStatusColumnInTables$.next(false);
    } else {
      this.applicationModelService.isShowStatusColumnInTables$.next(true);
    }
  }

  // doToggleSimpleFilters() {
  //   this.applicationModelService.isUseSimpleTextFilters$.next(!this.applicationModelService.isUseSimpleTextFilters$.getValue())
  // }

  doToggleMultiDealerships() {
    this.applicationModelService.isShowMultiDealerships$.next(!this.applicationModelService.isShowMultiDealerships$.getValue());
  }

  doRemoveTabAnimation() {
    this.applicationModelService.isTabAnimationRemoved$.next(!this.applicationModelService.isTabAnimationRemoved$.getValue());
  }

  doUseGridFiltersDropDown() {
    this.applicationModelService.isUseGridFilterDropDown$.next(!this.applicationModelService.isUseGridFilterDropDown$.getValue());
  }

  doUsePhaseIUI() {
    this.applicationModelService.isUsePhaseIUI$.next(!this.applicationModelService.isUsePhaseIUI$.getValue());
  }

  doUseCompactSearchFilter() {
    this.applicationModelService.isUseCompactSearchFilter$.next(!this.applicationModelService.isUseCompactSearchFilter$.getValue());
  }

  doUsePaymentsMenu() {
    this.applicationModelService.isUsePaymentsMenu$.next(!this.applicationModelService.isUsePaymentsMenu$.getValue());
  }

  doIsGlobalSearchDropDown() {
    this.applicationModelService.isGlobalSearchHasDropDown$.next(!this.applicationModelService.isGlobalSearchHasDropDown$.getValue());
  }
}
