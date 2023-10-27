import { Component } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-table-payment-list',
  templateUrl: './table-payment-list.component.html',
  styleUrls: ['./table-payment-list.component.scss']
})
export class TablePaymentListComponent {

  dataSource = this.localDataService.paymentListData;
  displayedColumns: string[] = ['paymentCustomerName', 'paymentDateRaised', 'paymentSource', 'paymentStatus', 'paymentAmmount',];

    constructor(public applicationModelService: ApplicationModelService,
                private localDataService: LocalDataService ) {
    }
}
