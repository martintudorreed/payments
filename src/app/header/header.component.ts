import { Component } from '@angular/core';
import { ApplicationModelService } from '../services/ApplicationModelService';
import { LocalDataService } from '../services/local-data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  localRegions = this.localDataService.regionData;
  selectedRegion =  this.localRegions[0].regionValue;

  constructor( public applicationModelService: ApplicationModelService,
               private localDataService: LocalDataService,
               public router: Router) { }

  doAbsorb(ev: any) {
    ev.stopPropagation();
  }

  doOpenForSettings(setDesc: string) {
    this.applicationModelService.isSidenavActiveForSettings$.next(true);
    this.applicationModelService.activeSettingsDescription$.next(setDesc);
  }

  doGoHome() {
    this.router.navigateByUrl('home');
    this.applicationModelService.activeRouteDescription$.next('Home');
  }

  doSidenavMobile(route: string, cat: string) {
    this.router.navigateByUrl(route);
    this.applicationModelService.isLevel2Active$.next(true);
    this.applicationModelService.activeRouteDescription$.next(cat);
    this.applicationModelService.isSidenavActive$.next(true);
  }
}
