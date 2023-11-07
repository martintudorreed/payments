import { Component, Input } from '@angular/core';
import { DialogPaymentAppComponent } from "../dialog-payment-app/dialog-payment-app.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-control-grid-filters',
  templateUrl: './control-grid-filters.component.html',
  styleUrls: ['./control-grid-filters.component.scss']
})
export class ControlGridFiltersComponent {
  @Input() isStandalone: boolean = false;

  constructor(public dialog: MatDialog,) {
  }

  doOpenFormInDialog() {
    this.dialog.open(DialogPaymentAppComponent, {
      maxWidth: '96%',
      minWidth: '96%',
      width: '96%',
      minHeight: '96%',
      maxHeight: '96vh',
      height: '96%',
      panelClass: 'ifm-dialog',
      autoFocus: false,
    });
  }
}
