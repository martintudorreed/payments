import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-dialog-load-from-application-datasource',
  templateUrl: './dialog-load-from-application-datasource.component.html',
  styleUrls: ['./dialog-load-from-application-datasource.component.scss']
})
export class DialogLoadFromApplicationDatasourceComponent {
  sourceAppID = this.data.sourceAppID;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public applicationModelService: ApplicationModelService) { }

}
