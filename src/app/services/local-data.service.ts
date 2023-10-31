import {Injectable, Input} from '@angular/core';

export interface paymentMethods {
  paymentMethodID: string;
  paymentMethodName: string;
}

export interface gridFilterItems {
  gridFilterItemID: number;
  gridFilterItemName: string;
}

export interface mainUITabs {
  tabIndex: number;
  tabLabel: string;
  tabContentType: string;
  tabdataItemIndexNo: number;
}

export interface ifmApps {
  ifmAppsID: string;
  ifmAppsName: string;
}

export interface triageRO {
  triageROID: string;
  triageROName: string;
}

export interface paymentData {
  paymentIdNo: number;
  paymentCustomerName: string;
  paymentDateRaised: string;
  paymentSource: string;
  paymentStatus: string;
  paymentStatusId: number;
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

  ifmAppData: ifmApps[] = [
    {
      ifmAppsID: '0',
      ifmAppsName: 'Triage',
    },
    {
      ifmAppsID: '1',
      ifmAppsName: 'Menus',
    },
    {
      ifmAppsID: '2',
      ifmAppsName: 'EPC',
    },
    {
      ifmAppsID: '3',
      ifmAppsName: 'Ad Hoc',
    }
  ]

  gridFilterItemsData: gridFilterItems [] = []

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
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882484',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Martin Tudor',
      paymentCustomerSurname: 'Reed',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 1,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882486',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Arnold',
      paymentCustomerSurname: 'Spanners',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 2,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882488',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Nancy',
      paymentCustomerSurname: 'Castle',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8842222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Molly',
      paymentCustomerSurname: 'Malone',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '884222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Judith',
      paymentCustomerSurname: 'Chalmers',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Triage',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '885123',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Peter',
      paymentCustomerSurname: 'Portley-Smythe',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '886789',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Andre',
      paymentCustomerSurname: 'Le Giante',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '886888',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Juniper',
      paymentCustomerSurname: 'Moonbush',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Ariadne',
      paymentCustomerSurname: 'Knee-knocker',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Simon',
      paymentCustomerSurname: 'Particles',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Jimmy',
      paymentCustomerSurname: 'Jumppers',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Sandra',
      paymentCustomerSurname: 'Dammint',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Henrietta',
      paymentCustomerSurname: 'Houses',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Brian',
      paymentCustomerSurname: 'Multitool',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Ariadne',
      paymentCustomerSurname: 'Knee-knocker',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Simon',
      paymentCustomerSurname: 'Particles',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Triage',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Jimmy',
      paymentCustomerSurname: 'Jumppers',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Sandra',
      paymentCustomerSurname: 'Dammint',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Henrietta',
      paymentCustomerSurname: 'Houses',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }
    ,
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032 4:44 PM',
      paymentSource: 'Menus',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032 4:44 PM',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Brian',
      paymentCustomerSurname: 'Multitool',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentInvoiceLines: 'Carry out the following as authorised\nReplace Brake Discs and Pads, Front\nReplace Globe, Fog Lamp Right Rear\nReplace wiper blades\n',
    }

  ]
}



