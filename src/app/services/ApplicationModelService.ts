import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject,  Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ApplicationModelService {

  constructor( public router: Router ) { }

  isRTL = 'ltr';
  isRTL$: BehaviorSubject<string> = new BehaviorSubject<string>(this.isRTL);

  activeRoute = this.router.url;
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

  activeSettingsUITab = 2;
  activeSettingsUITab$: BehaviorSubject<number> = new BehaviorSubject<number>(this.activeSettingsUITab);

  // There are two tabs by default always showing, this starts at 1 to reflect index values , e.g. 0 ,1,...
  currentTabCount = 1;
  currentTabCount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentTabCount);

}
