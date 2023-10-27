import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ApplicationModelService} from "./services/ApplicationModelService";
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triage-index';

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
    [Breakpoints.Tablet, 'Tablet'],
    [Breakpoints.TabletPortrait, 'TabletPortrait'],
    [Breakpoints.TabletLandscape, 'TabletLandscape'],
  ]);

  constructor( public dialog: MatDialog,
               public router: Router,
               breakpointObserver: BreakpointObserver,
               public applicationModelService: ApplicationModelService) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.Tablet,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log('current screen size is ' + this.currentScreenSize);
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.applicationModelService.currentBreakpoint$.next(this.currentScreenSize);
          }
        }
      });
  }
  sidenavClosed() {
    this.applicationModelService.isSidenavActive$.next(false);
  }
}
