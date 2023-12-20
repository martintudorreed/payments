import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-customer-form',
  templateUrl: './dialog-customer-form.component.html',
  styleUrls: ['./dialog-customer-form.component.scss']
})
export class DialogCustomerFormComponent {

  formToShow: number = 0;

  doChangeForm(ind: number) {
    this.formToShow = ind;
  }

}
