import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-payment-table-only',
  templateUrl: './view-payment-table-only.component.html',
  styleUrls: ['./view-payment-table-only.component.scss']
})
export class ViewPaymentTableOnlyComponent {
  @Input() isStandalone: boolean = false;
}
