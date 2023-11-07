import { Component, HostListener, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ApplicationModelService} from "./services/ApplicationModelService";
import {NavigationEnd, Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'triage-index';

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current Route:', event.url);
        this.applicationModelService.activeRoute$.next(event.url);
        console.log('rout in ams : ' + this.applicationModelService.activeRoute$.getValue());
      }
    });
    const currentRoute = this.router.url;
    this.applicationModelService.activeRoute$.next(currentRoute);
    console.log('Current Route:', currentRoute);
    console.log('rout in ams : ' + this.applicationModelService.activeRoute$.getValue());
  }

  ngAfterViewInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.applicationModelService.browserWindowWidth = event.target.innerWidth;
    this.applicationModelService.browserWindowWidth$.next(this.applicationModelService.browserWindowWidth);
    console.log(this.applicationModelService.browserWindowWidth$.getValue());
  }

  sidenavClosed() {
    this.applicationModelService.isSidenavActive$.next(false);
  }
}
