import { Component } from '@angular/core';
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.scss']
})
export class ViewSettingsComponent {

  constructor(public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService ) {
  }

  doClose() {
    this.applicationModelService.isSidenavActive$.next(false);
  }
}
