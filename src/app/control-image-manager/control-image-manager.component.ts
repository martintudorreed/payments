import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-image-manager',
  templateUrl: './control-image-manager.component.html',
  styleUrls: ['./control-image-manager.component.scss']
})
export class ControlImageManagerComponent {
  isFlipped: number = -1;
  imageLibrary = this.localDataService.imageLibraryData;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  doGetImageSrcString(imgName: string ) {
    return './assets/svg-logos/' + imgName + '-logo.svg';
  }

  doFlip(ind: number) {
    if (ind === this.isFlipped) {
      this.isFlipped = -1;
    } else {
      this.isFlipped = ind;
    }
  }
}
