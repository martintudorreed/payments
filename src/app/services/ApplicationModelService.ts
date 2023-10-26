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

}
