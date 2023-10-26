import {Injectable, Input} from '@angular/core';

export interface paymentMethods {
  paymentMethodID: string;
  paymentMethodName: string;
}

export interface paymentData {
  paymentCustomerName: string;
  paymentDateRaised: string;
  paymentAmmount: string;
  paymentSource: string;
  paymentStatus: string;
}


@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  paymentMethodData: paymentMethods [] = [
    {
      paymentMethodID: '0',
      paymentMethodName: 'Tillpay',
    },
    {
      paymentMethodID: '1',
      paymentMethodName: 'Visa',
    },
    {
      paymentMethodID: '2',
      paymentMethodName: 'Apple Pay',
    },
    {
      paymentMethodID: '3',
      paymentMethodName: 'Google Pay',
    },
    {
      paymentMethodID: '4',
      paymentMethodName: 'Samsung Pay',
    },
    {
      paymentMethodID: '5',
      paymentMethodName: 'Flip Play',
    },
    {
      paymentMethodID: '6',
      paymentMethodName: 'PayPal',
    },
    {
      paymentMethodID: '7',
      paymentMethodName: 'Pay-in-4',
    }
    ,
    {
      paymentMethodID: '8',
      paymentMethodName: 'Zip Pay',
    }
  ]

  paymentListData: paymentData[] = [
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },
    {
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
    },

  ]
}



