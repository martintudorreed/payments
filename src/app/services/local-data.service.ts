import {Injectable, Input} from '@angular/core';

export interface paymentMethods {
  paymentMethodID: string;
  paymentMethodName: string;
}

export interface mainUITabs {
  tabIndex: number;
  tabLabel: string;
  tabContentType: string;
  tabdataItemIndexNo: number;
}



export interface paymentData {
  paymentIdNo: number;
  paymentCustomerName: string;
  paymentDateRaised: string;
  paymentAmmount: string;
  paymentSource: string;
  paymentStatus: string;

  paymentTransactionProviderId: number;
  paymentTransactionNumber: string;
  paymentTransactionTotalExTax: number;
  paymentTransactionTotalTax: number;
  paymentTransactionTotalIncTax: number;
  paymentTransactionCreatedOn: string;
  paymentTransactionCreatedBy: string;
  paymentTransactionExpiry: string;
  paymentCustomerForename: string;
  paymentCustomerSurname: string;
  paymentCustomerTelNo: string;
  paymentCustomerEmail: string;
  paymentAddress1: string;
  paymentAddress2: string;
  paymentAddress3: string;
  paymentState: string;
  paymentPostCode: string;
  paymentInvoiceLines: string;
}

export interface regions {
  regionValue: string;
  regionName: string;
}



@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  mainUITabsData: mainUITabs [] = [

  ]

  regionData: regions [] = [
    {
      regionValue: "australia",
      regionName: "Australia"
    },
    {
      regionValue: "newzealand",
      regionName: "New Zealand"
    }
  ]

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
      paymentIdNo: 0,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882484',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Martin Tudor',
      paymentCustomerSurname: 'Reed0',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\\nReplace Brake Discs and Pads, Front\\nReplace Globe, Fog Lamp Right Rear\\nReplace wiper blades\\n\'',
    },
    {
      paymentIdNo: 1,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882486',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Martin Tudor',
      paymentCustomerSurname: 'Reed1',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\\nReplace Brake Discs and Pads, Front\\nReplace Globe, Fog Lamp Right Rear\\nReplace wiper blades\\n\'',
    },
    {
      paymentIdNo: 2,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentAmmount: '$88.88',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882488',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Martin Tudor',
      paymentCustomerSurname: 'Reed2',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\\nReplace Brake Discs and Pads, Front\\nReplace Globe, Fog Lamp Right Rear\\nReplace wiper blades\\n\'',
    }

  ]
}



