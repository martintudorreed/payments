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

export interface triageDataStructure {
  triageDataJobNumber: string;
  triageDataCustomerName: string;
  triageDataVehicle: string;
  triageDataRegoVIN: string;
  triageDataAuthorised: string;
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

  triageData: triageDataStructure[] = [
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataAuthorised: '88.88',
    },
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
      ifmAppsName: 'Ad Hoc - default',
    }
  ]

  gridFilterItemsData: gridFilterItems [] = [
    {
      gridFilterItemID: 0,
      gridFilterItemName: 'All',
    },
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
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882484',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 88.00,
      paymentTransactionCreatedOn: '22/08/2032',
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
      paymentDateRaised: '21/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882486',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 89.00,
      paymentTransactionCreatedOn: '21/08/2032',
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
      paymentDateRaised: '20/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '882488',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 90.00,
      paymentTransactionCreatedOn: '20/08/2032',
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
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8842222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 91.00,
      paymentTransactionCreatedOn: '18/08/2032',
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
      paymentIdNo: 4,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '884222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 92.00,
      paymentTransactionCreatedOn: '18/08/2032',
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
      paymentIdNo: 5,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '885123',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 93.00,
      paymentTransactionCreatedOn: '16/08/2032',
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
      paymentIdNo: 6,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '886789',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 94.00,
      paymentTransactionCreatedOn: '14/08/2032',
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
      paymentIdNo: 7,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '886888',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 95.00,
      paymentTransactionCreatedOn: '14/08/2032',
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
      paymentIdNo: 8,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 96.00,
      paymentTransactionCreatedOn: '14/08/2032',
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
      paymentIdNo: 9,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 97.00,
      paymentTransactionCreatedOn: '12/08/2032',
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
      paymentIdNo: 10,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 98.00,
      paymentTransactionCreatedOn: '12/08/2032',
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
      paymentIdNo: 11,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 99.00,
      paymentTransactionCreatedOn: '12/08/2032',
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
      paymentIdNo: 12,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 100.00,
      paymentTransactionCreatedOn: '08/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '08/09/2032',
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
      paymentIdNo: 13,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 101.00,
      paymentTransactionCreatedOn: '08/08/2032',
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
      paymentIdNo: 14,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 102.00,
      paymentTransactionCreatedOn: '08/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '08/09/2032',
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
      paymentIdNo: 15,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 103.00,
      paymentTransactionCreatedOn: '04/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '04/09/2032',
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
      paymentIdNo: 16,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 104.00,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
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
      paymentIdNo: 17,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 105.00,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
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
      paymentIdNo: 18,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 106.00,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
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
      paymentIdNo: 19,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 107.00,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
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



