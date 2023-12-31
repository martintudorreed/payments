import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject,  Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ApplicationModelService {

  constructor(public router: Router) {
  }

  isRTL = 'ltr';
  isRTL$: BehaviorSubject<string> = new BehaviorSubject<string>(this.isRTL);

  activeRoute = '/home';
  activeRoute$: BehaviorSubject<string> = new BehaviorSubject<string>(this.activeRoute);


  activeRouteDescription = 'Home';
  activeRouteDescription$: BehaviorSubject<string> = new BehaviorSubject<string>(this.activeRouteDescription);


  currentBreakpoint = 'default';
  currentBreakpoint$: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentBreakpoint);

  browserWindowWidth = 23;
  browserWindowWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(this.browserWindowWidth);

  browserWindowHeight = 22;
  browserWindowHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(this.browserWindowHeight);

  selectedThemeBrand = 'nissan';
  selectedThemeBrand$: BehaviorSubject<string> = new BehaviorSubject<string>(this.selectedThemeBrand);

  activeSettingsDescription = '';
  activeSettingsDescription$: BehaviorSubject<string> = new BehaviorSubject<string>(this.activeSettingsDescription);

  isLevel2Active = false;
  isLevel2Active$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLevel2Active);

  isSidenavActive = false;
  isSidenavActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isSidenavActive);

  activeMainUITab = 0;
  activeMainUITab$: BehaviorSubject<number> = new BehaviorSubject<number>(this.activeMainUITab);

  activeSettingsUITab = 0;
  activeSettingsUITab$: BehaviorSubject<number> = new BehaviorSubject<number>(this.activeSettingsUITab);

  // There are two tabs by default always showing, this starts at 1 to reflect index values , e.g. 0 ,1,...
  currentTabCount = 1;
  currentTabCount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentTabCount);

  nextNewTabContentType = 'payment';
  nextNewTabContentType$: BehaviorSubject<string> = new BehaviorSubject<string>(this.nextNewTabContentType);

  isShowDashboard = false;
  isShowDashboard$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShowDashboard);

  isShow2WayMenu = false;
  isShow2WayMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShow2WayMenu);

  isInIframe = false;
  isInIframe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isInIframe);

  isInIframeDataValue = -1;
  isInIframeDataValue$: BehaviorSubject<number> = new BehaviorSubject<number>(this.isInIframeDataValue);

  isDocumentViewerCollapsed = false;
  isDocumentViewerCollapsed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isDocumentViewerCollapsed);

  templateDataSource: any[] = [];
  templateDataSource$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.templateDataSource);

  templateSections: any[] = [];
  templateSections$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.templateSections);

  currentTemplateId = '0';
  currentTemplateId$: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentTemplateId);

  currentTemplateIdViewer = '0';
  currentTemplateIdViewer$: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentTemplateIdViewer);

  currentPaymentIndexNumber = 0;
  currentPaymentIndexNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentPaymentIndexNumber);

  activeHeader = '-1';
  activeHeader$: BehaviorSubject<string> = new BehaviorSubject<string>(this.activeHeader);

  isUseSimpleTextFilters = false;
  isUseSimpleTextFilters$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUseSimpleTextFilters);

  isShowStatusColumnInTables = true;
  isShowStatusColumnInTables$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShowStatusColumnInTables);

  currentDisclaimerIndexNumber = 0;
  currentDisclaimerIndexNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentDisclaimerIndexNumber);

  isShowMultiDealerships = false;
  isShowMultiDealerships$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShowMultiDealerships);

  isShowAllDealersInTable = false;
  isShowAllDealersInTable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShowAllDealersInTable);

  isTabAnimationRemoved = false;
  isTabAnimationRemoved$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isTabAnimationRemoved);

  isUseGridFilterDropDown = true;
  isUseGridFilterDropDown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUseGridFilterDropDown);

  isUsePhaseIUI = true;
  isUsePhaseIUI$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUsePhaseIUI);

  isPaymentOpen = false;
  isPaymentOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isPaymentOpen);

  isUseCompactSearchFilter = true;
  isUseCompactSearchFilter$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUseCompactSearchFilter);

  triggerToClearChipLists = false;
  triggerToClearChipLists$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.triggerToClearChipLists);

  chipFilterStatusIsSet = false;
  chipFilterStatusIsSet$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.chipFilterStatusIsSet);

  chipFilterCreatedByIsSet = false;
  chipFilterCreatedByIsSet$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.chipFilterCreatedByIsSet);

  chipFilterDealershipIsSet = false;
  chipFilterDealershipIsSet$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.chipFilterDealershipIsSet);

  isUsePaymentsMenu = true;
  isUsePaymentsMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUsePaymentsMenu);

  isGlobalSearchHasDropDown = false;
  isGlobalSearchHasDropDown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isGlobalSearchHasDropDown);
}
