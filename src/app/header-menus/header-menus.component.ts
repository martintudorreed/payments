import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-menus',
  templateUrl: './header-menus.component.html',
  styleUrls: ['./header-menus.component.scss']
})
export class HeaderMenusComponent {
  localRegions = this.localDataService.regionData;
  selectedRegion =  this.localRegions[0].regionValue;
  brands = this.localDataService.themeBrandData;

  navLinks = [
    {location:'/home',label:'Jobs Today'},
    {location: '/home', label: 'Reports'},
    {location:'/home',label:'Follow-ups'},
    {location:'/home',label:'Payments'}
  ];

  constructor( public applicationModelService: ApplicationModelService,
               private localDataService: LocalDataService,
               public router: Router) { }

  ngOnInit() {
    // find and then locally load template data
    // load from local storage
    if (localStorage.getItem('selectedLogo')) {
      const data = localStorage.getItem('selectedLogo') || 'none';
      console.log(data);
      this.applicationModelService.selectedThemeBrand$.next(data);
    } else {
      this.applicationModelService.selectedThemeBrand$.next('nissan')
    }

  }

  doAbsorb(ev: any) {
    ev.stopPropagation();
  }

  doOpenSettings() {
    this.applicationModelService.isSidenavActive$.next(true);
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

  doChangeLogo(brand: string) {
    this.applicationModelService.selectedThemeBrand$.next(brand);
    localStorage.setItem('selectedLogo', brand);
  }
}
