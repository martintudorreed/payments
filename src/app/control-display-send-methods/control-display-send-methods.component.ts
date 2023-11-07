import { Component, Input } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-display-send-methods',
  templateUrl: './control-display-send-methods.component.html',
  styleUrls: ['./control-display-send-methods.component.scss']
})
export class ControlDisplaySendMethodsComponent {
  @Input() customerName: string = '';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'
  @Input() isInMainUI: boolean = false;
  isEMailChecked: boolean = true;
  isSMSChecked: boolean = false;
  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {}

  onTabSelected(ev: any) {

  }

  doCheckBoxStatus(ind: number, ev: any) {
    // ev.stopPropagation();

    console.log(ind + 'is the index no clicked')
    console.log('isMailChecked = '  + this.isEMailChecked);
    console.log('isSMSChecked = '  + this.isSMSChecked);

    if(!this.isSMSChecked && !this.isEMailChecked ) {
      this.isEMailChecked = true;
      this._snackBar.open('Send Defaults to Email' , 'Undo', {
        duration: 3000,
        panelClass: 'ifm-snackbar'
      });
    }

  }

}
