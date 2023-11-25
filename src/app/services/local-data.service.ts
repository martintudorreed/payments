import {Injectable, Input} from '@angular/core';


export interface generalSettings {
  publicIntegrationIKey: string;
  dealerName:  string;
  dealerEmail:  string;
  dealerContactNumber: string;
  currencySymbol: string;
  countryCode: string;
  APIKey: string;
  sharedSecret: string;
  APIUserName: string;
  APIPassword: string;
  merchantID: string;
  supportTelephoneNumber: string;
  defaultLogo: string;
}

export interface disclaimers {
  disclaimerId: string;
  disclaimerName: string;
  disclaimerIsLink: boolean;
  disclaimerLink: string;
  disclaimerContents: string;
}

export interface informationalLinks {
  informationalLinkId: string;
  informationalLinkSubject: string;
  informationalLinkURL: string;
}

export interface emailSettings {
  emailID: string;
  emailSourceApplicationID: string;
  emailSubject: string;
  emailSender: string;
  emailReplyTo: string;
}

export interface sections {
  sectionId: string;
  sectionContent: string;
  sectionContentStyle: string;
  sectionIndexOrder: number;
}

export interface commsTemplate {
  templateID: string;
  templateProviderId: string;
  templateType: string;
  templateSourceApplication: string;
  templateEmailSourceID: string;
  templateName: string;
  templateLogo: string;
  templateColor: string;
  templateSections: sections[];
  templateContents: string;
  templateCreatedBy: string;
  templateCreatedOn: string;
}

export interface custSections {
  custSectionId: string;
  custSectionContent: string;
  custSectionContentStyle: string;
  custSectionIndexOrder: number;
}

export interface custTemplate {
  custTemplateID: string;
  custTemplateProviderId: string;
  custTemplateType: string;
  custTemplateSourceApplication: string;
  custTemplateName: string;
  custTemplateLogo: string;
  custTemplateColor: string;
  custTemplateSections: custSections[];
  custTemplateCreatedBy: string;
  custTemplateCreatedOn: string;
}

export interface smsTemplate {
  smsTemplateID: string;
  smsTemplateProviderId: string;
  smsTemplateType: string;
  smsTemplateSourceApplication: string;
  smsTemplateName: string;
  smsTemplateContent: string;
  smsTemplateCreatedBy: string;
  smsTemplateCreatedOn: string;
}

export interface themeBrands {
  brandValue: string;
  brandName: string;
}

export interface imageLibrary {
  imageID: string;
  ImageName: string;
  ImageDiscName: string;
  ImageDiscLocation: string;
}

export interface colorScheme {
  colorSchemeValue: string;
  colorSchemeName: string;
}

export interface paymentMethods {
  paymentMethodID: string;
  paymentMethodName: string;
}

export interface gridFilterItems {
  gridFilterItemID: number;
  gridFilterItemName: string;
}

export interface dealerships {
  dealershipID: number;
  dealershipName: string;
}

export interface templateFilterItems {
  templateFilterItemID: number;
  templateFilterItemName: string;
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
  triageDataServiceAdviser: string;
  triageDataTechnician: string;
  triageDataIdentified: string;
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
  paymentVehicle: string;
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

  smsTemplateData: smsTemplate[] = [
    {
      smsTemplateID: '0',
      smsTemplateProviderId: '0',
      smsTemplateType: 'sms',
      smsTemplateSourceApplication: '0',
      smsTemplateName: 'Default - Request Payment',
      smsTemplateContent: 'Tax invoice INV-6209 for $[ammount] <br><br>' +
        'Please click the link below to view, print, download or pay the invoice.<br><br>' +
        '[tinyURL]<br><br>' +
        '[dealerName]',
      smsTemplateCreatedBy: 'Martin Tudor Reed',
      smsTemplateCreatedOn: '02/04/2034',
    }
  ]

  informationalLinkData: informationalLinks[] = [
    {
      informationalLinkId: '0',
      informationalLinkSubject: 'Terms and Conditions and Disclaimer',
      informationalLinkURL: 'http://www.tult.co.nz/tsandcs'
    }
  ]

  emailSettingData: emailSettings[] = [
    {
      emailID: '0',
      emailSourceApplicationID: '0',
      emailSubject: 'Invoice [invoiceNumber] for work carried out at [dealerName]' ,
      emailSender: 'sender@dealeremail.com',
      emailReplyTo: 'replyTo@dealeremail.com',
    },
    {
      emailID: '1',
      emailSourceApplicationID: '0',
      emailSubject: 'Overdue Reminder Invoice [invoiceNumber] for work carried out at [dealerName]' ,
      emailSender: 'sender@dealeremail.com',
      emailReplyTo: 'replyTo@dealeremail.com',
    },
  ]

  disclaimerData: disclaimers[] = [
    {
      disclaimerId: '0',
      disclaimerName: 'Service Disclaimer - full version',
      disclaimerIsLink: false,
      disclaimerLink: '',
      disclaimerContents: '<span class="mat-caption">Superservice Triage does not store or process financial information. The Triage Customer Authorisation screen has the PayPal site within an Iframe and everything inside of that is secure. Triage cannot see any data that is being transacted due to the PayPal encryption being used.<br><br>' +
        'Some additional options such as Payflow Link may need to be configured in the merchants account however the merchant (dealer) will need to investigate this as part of their due diligence. Additional fees may be charged to the dealer by PayPal for a business account.<br><br>' +
        'Superservice Triage or Infomedia is not responsible for payment issues between the customer and PayPal.</span>',
    },
    {
      disclaimerId: '1',
      disclaimerName: 'Service Disclaimer - URL Link',
      disclaimerIsLink: true,
      disclaimerLink: 'http://www.tult.co.nz/triage',
      disclaimerContents: '<span class="mat-caption">Terms and Conditions of Service - 2032</span>',
    }
  ]

  colorSchemeData: colorScheme [] = [
    {
      colorSchemeValue: '0',
      colorSchemeName: 'Blue',
    },
    {
      colorSchemeValue: '1',
      colorSchemeName: 'Red',
    },
    {
      colorSchemeValue: '2',
      colorSchemeName: 'Green',
    },
    {
      colorSchemeValue: '3',
      colorSchemeName: 'Black',
    },
    // {
    //   colorSchemeValue: '4',
    //   colorSchemeName: 'white',
    // },
  ]

  generalSettingsData: generalSettings [] = [
    {
      publicIntegrationIKey: '4RNOekvNNMiQGARKtcfg',
      dealerName:  'Future Motors Space-Cars',
      dealerEmail:  'fms@theworldoftommorrow.com',
      dealerContactNumber: '04026704555',
      currencySymbol: '$',
      countryCode: 'AUS',
      APIKey: 'e3eDaFUFZ07ADAuADPEG23qe3Ijde2',
      sharedSecret: 'H4lHKlWnw54ciC1nlUbwibD2ljoXIM',
      APIUserName: 'InfoMedia_API_Dev',
      APIPassword: 'lwX53muBCvnXaqMRVaWYGPkn5Jf9x6!',
      merchantID: 'IFM88',
      supportTelephoneNumber: '04 0842 4428',
      defaultLogo: 'nissan',
    }
  ]

  emptySections: sections[] = [
    {
      sectionId: '0',
      sectionContent: 'logo',
      sectionContentStyle: '',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '1',
      sectionContent: 'Starter text [dealerName]',
      sectionContentStyle: 'mat-headline-4',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '2',
      sectionContent: 'Starter text [ammount]',
      sectionContentStyle: 'mat-headline-2',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '3',
      sectionContent: 'Starter text [invoiceNumber] is due on [dueDate]',
      sectionContentStyle: 'mat-headline-4',
      sectionIndexOrder: -1,
    }
    ,
    {
      sectionId: '5',
      sectionContent: 'Starter text [customerFirstname],<br><br> Here\'s your tax invoice [invoiceNumber] for $[ammount] Starter text',
      sectionContentStyle: '',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '6',
      sectionContent: 'Starter text [dealerName]',
      sectionContentStyle: '',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '4',
      sectionContent: 'Pay Invoice',
      sectionContentStyle: '',
      sectionIndexOrder: -1,
    },
    {
      sectionId: '7',
      sectionContent: 'Starter text [triageDisclaimer]',
      sectionContentStyle: '',
      sectionIndexOrder: -1,
    }
  ]

  custTemplateData: custTemplate[]=[
    {
      custTemplateID: '0',
      custTemplateProviderId: '0',
      custTemplateType: 'email',
      custTemplateSourceApplication: '0',
      custTemplateColor: '0',
      custTemplateName: 'Tillpay standard',
      custTemplateLogo: 'future-motors',
      custTemplateSections: [
        {
          custSectionId: '0',
          custSectionContent: 'logo',
          custSectionContentStyle: '',
          custSectionIndexOrder: -1,
        }
      ],
      custTemplateCreatedBy: 'Martin Tudor Reed',
      custTemplateCreatedOn: '05/02/2032',
    }]

  templateData: commsTemplate[]=[
    {
      templateID: '0',
      templateProviderId: '0',
      templateType: 'email',
      templateSourceApplication: '0',
      templateEmailSourceID: '0',
      templateColor: '0',
      templateName: 'Inspection Standard Email',
      templateLogo: 'future-motors',
      templateSections: [
        {
        sectionId: '0',
        sectionContent: 'logo',
        sectionContentStyle: '',
        sectionIndexOrder: -1,
        },
        {
          sectionId: '1',
          sectionContent: '[customerFirstname] Your Invoice from [dealerName] (BES-29367)',
          sectionContentStyle: 'mat-headline-4',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '2',
          sectionContent: '[ammount]',
          sectionContentStyle: 'mat-headline-2',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '3',
          sectionContent: 'is due on [dueDate]',
          sectionContentStyle: 'mat-headline-4',
          sectionIndexOrder: -1,
        }
        ,
        {
          sectionId: '5',
          sectionContent: 'Please find attached your tax invoice for the service work completed on your vehicle [vehicle] <br> <br> Please click the Pay Invoice button to pay the invoice',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '4',
          sectionContent: 'Pay Invoice',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '7',
          sectionContent: '[triageDisclaimer]',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        }
        ,
      ],
      templateContents: '',
      templateCreatedBy: 'Martin Tudor Reed',
      templateCreatedOn: '05/02/2032',
    },
    {
      templateID: '1',
      templateProviderId: '0',
      templateType: 'email',
      templateSourceApplication: '0',
      templateEmailSourceID: '1',
      templateColor: '1',
      templateName: 'Overdue - Gentle Reminder',
      templateLogo: 'future-motors',
      templateSections: [
        {
          sectionId: '0',
          sectionContent: 'logo',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '1',
          sectionContent: 'Payment Reminder',
          sectionContentStyle: 'mat-headline-2',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '4',
          sectionContent: 'Pay Invoice',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '6',
          sectionContent: '[ammount]',
          sectionContentStyle: 'mat-headline-2',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '3',
          sectionContent: 'is due on [dueDate]',
          sectionContentStyle: 'mat-headline-4',
          sectionIndexOrder: -1,
        }
        ,
        {
          sectionId: '5',
          sectionContent: 'Please find attached your tax invoice for the service work completed on your vehicle [vehicle] <br> <br> Please click the Pay Invoice button to pay the invoice',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        }
        ,
        {
          sectionId: '7',
          sectionContent: '[triageDisclaimer]',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        }
      ],
      templateContents: '',
      templateCreatedBy: 'Martin Tudor Reed',
      templateCreatedOn: '05/02/2032',
    },
    {
      templateID: '2',
      templateProviderId: '0',
      templateType: 'email',
      templateSourceApplication: '1',
      templateEmailSourceID: '0',
      templateColor: '0',
      templateName: 'Aston Martin Service',
      templateLogo: 'aston-martin',
      templateSections: [
        {
          sectionId: '0',
          sectionContent: 'logo',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '1',
          sectionContent: 'Service at [dealerName]',
          sectionContentStyle: 'mat-headline-4',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '2',
          sectionContent: '[invoiceNumber] for [ammount] is due on [dueDate]',
          sectionContentStyle: 'mat-headline-2',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '4',
          sectionContent: 'Pay Invoice',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        }
        ,
        {
          sectionId: '3',
          sectionContent: 'Hi [customerFirstName] <br><br>' +
            'Please click the Pay Invoice button above to view, print, download or pay the invoice.<br><br>' +
            'If you have any questions, please contact us on the interdimensional telephone - Mars99.',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        },
        {
          sectionId: '5',
          sectionContent: '[dealerName]',
          sectionContentStyle: '',
          sectionIndexOrder: -1,
        }
      ],
      templateContents: '',
      templateCreatedBy: 'Martin Tudor Reed',
      templateCreatedOn: '05/02/2032',
    }
  ]

  mainUITabsData: mainUITabs [] = [

  ]

  triageData: triageDataStructure[] = [
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataServiceAdviser: 'Michael Culvert',
      triageDataTechnician: 'Susan Jupiter',
      triageDataIdentified: '88.88',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288443',
      triageDataCustomerName: 'Alice Johnson',
      triageDataVehicle: 'Galaxy 2000 - Sedan',
      triageDataRegoVIN: 'Ford123',
      triageDataServiceAdviser: 'John Smith',
      triageDataTechnician: 'John Doe',
      triageDataIdentified: '77.77',
      triageDataAuthorised: '77.77',
    },
    {
      triageDataJobNumber: '88288444',
      triageDataCustomerName: 'Eve Williams',
      triageDataVehicle: 'Starship 9001 - Coupe',
      triageDataRegoVIN: 'SpaceX567',
      triageDataServiceAdviser: 'Alice Brown',
      triageDataTechnician: 'Bob Johnson',
      triageDataIdentified: '66.66',
      triageDataAuthorised: '66.66',
    },
    {
      triageDataJobNumber: '88288445',
      triageDataCustomerName: 'Frank Wilson',
      triageDataVehicle: 'Rocket 42 - Hatchback',
      triageDataRegoVIN: 'Tesla789',
      triageDataServiceAdviser: 'Carol Davis',
      triageDataTechnician: 'Eva Smith',
      triageDataIdentified: '55.55',
      triageDataAuthorised: '55.55',
    },
    {
      triageDataJobNumber: '88288446',
      triageDataCustomerName: 'Grace Brown',
      triageDataVehicle: 'Cosmos 2022 - SUV',
      triageDataRegoVIN: 'NASA101',
      triageDataServiceAdviser: 'David Lee',
      triageDataTechnician: 'Fiona Miller',
      triageDataIdentified: '44.44',
      triageDataAuthorised: '44.44',
    },
    {
      triageDataJobNumber: '88288447',
      triageDataCustomerName: 'Henry Parker',
      triageDataVehicle: 'Astronaut 3000 - Pickup',
      triageDataRegoVIN: 'SpaceRover567',
      triageDataServiceAdviser: 'Emma Hall',
      triageDataTechnician: 'George Taylor',
      triageDataIdentified: '33.33',
      triageDataAuthorised: '33.33',
    },
    {
      triageDataJobNumber: '88288448',
      triageDataCustomerName: 'Ivy Adams',
      triageDataVehicle: 'Starship 505 - Convertible',
      triageDataRegoVIN: 'Galaxy999',
      triageDataServiceAdviser: 'Frank White',
      triageDataTechnician: 'Hannah Green',
      triageDataIdentified: '22.22',
      triageDataAuthorised: '22.22',
    },
    {
      triageDataJobNumber: '88288449',
      triageDataCustomerName: 'Jack Robinson',
      triageDataVehicle: 'Meteor 777 - Coupe',
      triageDataRegoVIN: 'Comet123',
      triageDataServiceAdviser: 'Grace Moore',
      triageDataTechnician: 'Ian Davis',
      triageDataIdentified: '11.11',
      triageDataAuthorised: '11.11',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataServiceAdviser: 'Michael Culvert',
      triageDataTechnician: 'Susan Jupiter',
      triageDataIdentified: '88.88',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288443',
      triageDataCustomerName: 'Alice Johnson',
      triageDataVehicle: 'Galaxy 2000 - Sedan',
      triageDataRegoVIN: 'Ford123',
      triageDataServiceAdviser: 'John Smith',
      triageDataTechnician: 'John Doe',
      triageDataIdentified: '77.77',
      triageDataAuthorised: '77.77',
    },
    {
      triageDataJobNumber: '88288444',
      triageDataCustomerName: 'Eve Williams',
      triageDataVehicle: 'Starship 9001 - Coupe',
      triageDataRegoVIN: 'SpaceX567',
      triageDataServiceAdviser: 'Alice Brown',
      triageDataTechnician: 'Bob Johnson',
      triageDataIdentified: '66.66',
      triageDataAuthorised: '66.66',
    },
    {
      triageDataJobNumber: '88288445',
      triageDataCustomerName: 'Frank Wilson',
      triageDataVehicle: 'Rocket 42 - Hatchback',
      triageDataRegoVIN: 'Tesla789',
      triageDataServiceAdviser: 'Carol Davis',
      triageDataTechnician: 'Eva Smith',
      triageDataIdentified: '55.55',
      triageDataAuthorised: '55.55',
    },
    {
      triageDataJobNumber: '88288446',
      triageDataCustomerName: 'Grace Brown',
      triageDataVehicle: 'Cosmos 2022 - SUV',
      triageDataRegoVIN: 'NASA101',
      triageDataServiceAdviser: 'David Lee',
      triageDataTechnician: 'Fiona Miller',
      triageDataIdentified: '44.44',
      triageDataAuthorised: '44.44',
    },
    {
      triageDataJobNumber: '88288447',
      triageDataCustomerName: 'Henry Parker',
      triageDataVehicle: 'Astronaut 3000 - Pickup',
      triageDataRegoVIN: 'SpaceRover567',
      triageDataServiceAdviser: 'Emma Hall',
      triageDataTechnician: 'George Taylor',
      triageDataIdentified: '33.33',
      triageDataAuthorised: '33.33',
    },
    {
      triageDataJobNumber: '88288448',
      triageDataCustomerName: 'Ivy Adams',
      triageDataVehicle: 'Starship 505 - Convertible',
      triageDataRegoVIN: 'Galaxy999',
      triageDataServiceAdviser: 'Frank White',
      triageDataTechnician: 'Hannah Green',
      triageDataIdentified: '22.22',
      triageDataAuthorised: '22.22',
    },
    {
      triageDataJobNumber: '88288449',
      triageDataCustomerName: 'Jack Robinson',
      triageDataVehicle: 'Meteor 777 - Coupe',
      triageDataRegoVIN: 'Comet123',
      triageDataServiceAdviser: 'Grace Moore',
      triageDataTechnician: 'Ian Davis',
      triageDataIdentified: '11.11',
      triageDataAuthorised: '11.11',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataServiceAdviser: 'Michael Culvert',
      triageDataTechnician: 'Susan Jupiter',
      triageDataIdentified: '88.88',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288443',
      triageDataCustomerName: 'Alice Johnson',
      triageDataVehicle: 'Galaxy 2000 - Sedan',
      triageDataRegoVIN: 'Ford123',
      triageDataServiceAdviser: 'John Smith',
      triageDataTechnician: 'John Doe',
      triageDataIdentified: '77.77',
      triageDataAuthorised: '77.77',
    },
    {
      triageDataJobNumber: '88288444',
      triageDataCustomerName: 'Eve Williams',
      triageDataVehicle: 'Starship 9001 - Coupe',
      triageDataRegoVIN: 'SpaceX567',
      triageDataServiceAdviser: 'Alice Brown',
      triageDataTechnician: 'Bob Johnson',
      triageDataIdentified: '66.66',
      triageDataAuthorised: '66.66',
    },
    {
      triageDataJobNumber: '88288445',
      triageDataCustomerName: 'Frank Wilson',
      triageDataVehicle: 'Rocket 42 - Hatchback',
      triageDataRegoVIN: 'Tesla789',
      triageDataServiceAdviser: 'Carol Davis',
      triageDataTechnician: 'Eva Smith',
      triageDataIdentified: '55.55',
      triageDataAuthorised: '55.55',
    },
    {
      triageDataJobNumber: '88288446',
      triageDataCustomerName: 'Grace Brown',
      triageDataVehicle: 'Cosmos 2022 - SUV',
      triageDataRegoVIN: 'NASA101',
      triageDataServiceAdviser: 'David Lee',
      triageDataTechnician: 'Fiona Miller',
      triageDataIdentified: '44.44',
      triageDataAuthorised: '44.44',
    },
    {
      triageDataJobNumber: '88288447',
      triageDataCustomerName: 'Henry Parker',
      triageDataVehicle: 'Astronaut 3000 - Pickup',
      triageDataRegoVIN: 'SpaceRover567',
      triageDataServiceAdviser: 'Emma Hall',
      triageDataTechnician: 'George Taylor',
      triageDataIdentified: '33.33',
      triageDataAuthorised: '33.33',
    },
    {
      triageDataJobNumber: '88288448',
      triageDataCustomerName: 'Ivy Adams',
      triageDataVehicle: 'Starship 505 - Convertible',
      triageDataRegoVIN: 'Galaxy999',
      triageDataServiceAdviser: 'Frank White',
      triageDataTechnician: 'Hannah Green',
      triageDataIdentified: '22.22',
      triageDataAuthorised: '22.22',
    },
    {
      triageDataJobNumber: '88288449',
      triageDataCustomerName: 'Jack Robinson',
      triageDataVehicle: 'Meteor 777 - Coupe',
      triageDataRegoVIN: 'Comet123',
      triageDataServiceAdviser: 'Grace Moore',
      triageDataTechnician: 'Ian Davis',
      triageDataIdentified: '11.11',
      triageDataAuthorised: '11.11',
    },
    {
      triageDataJobNumber: '88288442',
      triageDataCustomerName: 'Duncan Seyward',
      triageDataVehicle: 'Spacecar 3034 - Convertible 4sField',
      triageDataRegoVIN: 'Zaphod99',
      triageDataServiceAdviser: 'Michael Culvert',
      triageDataTechnician: 'Susan Jupiter',
      triageDataIdentified: '88.88',
      triageDataAuthorised: '88.88',
    },
    {
      triageDataJobNumber: '88288443',
      triageDataCustomerName: 'Alice Johnson',
      triageDataVehicle: 'Galaxy 2000 - Sedan',
      triageDataRegoVIN: 'Ford123',
      triageDataServiceAdviser: 'John Smith',
      triageDataTechnician: 'John Doe',
      triageDataIdentified: '77.77',
      triageDataAuthorised: '77.77',
    },
    {
      triageDataJobNumber: '88288444',
      triageDataCustomerName: 'Eve Williams',
      triageDataVehicle: 'Starship 9001 - Coupe',
      triageDataRegoVIN: 'SpaceX567',
      triageDataServiceAdviser: 'Alice Brown',
      triageDataTechnician: 'Bob Johnson',
      triageDataIdentified: '66.66',
      triageDataAuthorised: '66.66',
    },
    {
      triageDataJobNumber: '88288445',
      triageDataCustomerName: 'Frank Wilson',
      triageDataVehicle: 'Rocket 42 - Hatchback',
      triageDataRegoVIN: 'Tesla789',
      triageDataServiceAdviser: 'Carol Davis',
      triageDataTechnician: 'Eva Smith',
      triageDataIdentified: '55.55',
      triageDataAuthorised: '55.55',
    },
    {
      triageDataJobNumber: '88288446',
      triageDataCustomerName: 'Grace Brown',
      triageDataVehicle: 'Cosmos 2022 - SUV',
      triageDataRegoVIN: 'NASA101',
      triageDataServiceAdviser: 'David Lee',
      triageDataTechnician: 'Fiona Miller',
      triageDataIdentified: '44.44',
      triageDataAuthorised: '44.44',
    },
    {
      triageDataJobNumber: '88288447',
      triageDataCustomerName: 'Henry Parker',
      triageDataVehicle: 'Astronaut 3000 - Pickup',
      triageDataRegoVIN: 'SpaceRover567',
      triageDataServiceAdviser: 'Emma Hall',
      triageDataTechnician: 'George Taylor',
      triageDataIdentified: '33.33',
      triageDataAuthorised: '33.33',
    },
    {
      triageDataJobNumber: '88288448',
      triageDataCustomerName: 'Ivy Adams',
      triageDataVehicle: 'Starship 505 - Convertible',
      triageDataRegoVIN: 'Galaxy999',
      triageDataServiceAdviser: 'Frank White',
      triageDataTechnician: 'Hannah Green',
      triageDataIdentified: '22.22',
      triageDataAuthorised: '22.22',
    },
    {
      triageDataJobNumber: '88288449',
      triageDataCustomerName: 'Jack Robinson',
      triageDataVehicle: 'Meteor 777 - Coupe',
      triageDataRegoVIN: 'Comet123',
      triageDataServiceAdviser: 'Grace Moore',
      triageDataTechnician: 'Ian Davis',
      triageDataIdentified: '11.11',
      triageDataAuthorised: '11.11',
    },

  ]

  ifmAppData: ifmApps[] = [
    {
      ifmAppsID: '-1',
      ifmAppsName: 'Payments',
    },
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

  templateFilterItemsData: templateFilterItems [] = [
    {
      templateFilterItemID: 0,
      templateFilterItemName: 'All',
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
      paymentCustomerName: '',
      paymentDateRaised: 'Today',
      paymentSource: 'Adhoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-882222',
      paymentTransactionTotalExTax: 8.00,
      paymentTransactionTotalTax: 0.80,
      paymentTransactionTotalIncTax: 8.80,
      paymentTransactionCreatedOn: 'Today',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '22/09/2032',
      paymentCustomerForename: 'Martin',
      paymentCustomerSurname: 'Tudor Reed',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '2/5 Beach Grove',
      paymentAddress2: 'Mornington',
      paymentAddress3: '',
      paymentState: 'Victoria',
      paymentPostCode: '3931',
      paymentVehicle: 'Space Car 1200 - 4sField-1200',
      paymentInvoiceLines: 'Rebuild engine floaters - anti rad',
    },
    {
      paymentIdNo: 1,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '21/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-882486',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 2,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '20/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-882488',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 1641.12,
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
      paymentVehicle: 'Space Car 8000 - 4sField-800',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 3,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-8842222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 4,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-884222',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 5,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-885123',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 6,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Paid in Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-886789',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 7,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Overdue',
      paymentStatusId: 2,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-886888',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 8,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 9,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 10,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 14,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Menus',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-887842',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 15,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Ad Hoc',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-887924',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 16,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Paid In Full',
      paymentStatusId: 0,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-890001',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-8900012',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
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
      paymentTransactionNumber: '∞FM-891234',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 20,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Simon',
      paymentCustomerSurname: 'Smith',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 21,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Andrew',
      paymentCustomerSurname: 'Guthrie',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 22,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Brian',
      paymentCustomerSurname: 'le-snail',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 23,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Corey',
      paymentCustomerSurname: 'Spoona',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 24,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Dierdrie',
      paymentCustomerSurname: 'Barlow',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 25,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Elizabeth',
      paymentCustomerSurname: 'Bethaliz',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 26,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Fanny',
      paymentCustomerSurname: 'Adams',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 27,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Gertie',
      paymentCustomerSurname: 'Gallops',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 28,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Henrieta',
      paymentCustomerSurname: 'Fratelli',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 29,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Gordons',
      paymentCustomerSurname: 'Gin',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 30,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Ian',
      paymentCustomerSurname: 'I am',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 31,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Jeff',
      paymentCustomerSurname: 'Jalloppers',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 32,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Kris',
      paymentCustomerSurname: 'Not so Kross',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 33,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Lemmy',
      paymentCustomerSurname: 'Motorhead',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 34,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Mitch',
      paymentCustomerSurname: 'Itch',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 35,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Norbert',
      paymentCustomerSurname: 'Functions III',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 36,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Orlando',
      paymentCustomerSurname: 'Trumpet',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 37,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Paul',
      paymentCustomerSurname: 'Peroni',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 38,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Quentin',
      paymentCustomerSurname: 'Quiverss',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 39,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
      paymentTransactionCreatedOn: '02/08/2032',
      paymentTransactionCreatedBy: 'Arthur Moonraker',
      paymentTransactionExpiry: '02/09/2032',
      paymentCustomerForename: 'Roger',
      paymentCustomerSurname: 'That',
      paymentCustomerTelNo: '021 885839',
      paymentCustomerEmail: 'mtudorreed@infomedia.com.au',
      paymentAddress1: '7 Palazzo Drive',
      paymentAddress2: 'Papamoa Beach',
      paymentAddress3: 'Papamoa East',
      paymentState: 'Bay of Plenty',
      paymentPostCode: '3118',
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    },
    {
      paymentIdNo: 40,
      paymentCustomerName: 'Martin Tudor Reed',
      paymentDateRaised: '22/08/2032',
      paymentSource: 'Triage',
      paymentStatus: 'Pending',
      paymentStatusId: 1,
      paymentTransactionProviderId: 0,
      paymentTransactionNumber: '∞FM-888900',
      paymentTransactionTotalExTax: 80.00,
      paymentTransactionTotalTax: 8.00,
      paymentTransactionTotalIncTax: 641.12,
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
      paymentVehicle: 'Space Car 4000 - 4sField-100',
      paymentInvoiceLines: 'Summary:\n45,00Km Scheduled Service, Front\nReplace Brake Discs and Pads\nReplace wiper blades\n',
    }

  ]

  imageLibraryData: imageLibrary[] = [
    {
      imageID: '0',
      ImageName: 'Future Motors Logo',
      ImageDiscName: 'future-motors',
      ImageDiscLocation: 'svg-logos',
    },
    {
      imageID: '1',
      ImageName: 'Brand Logo',
      ImageDiscName: 'currentLogo',
      ImageDiscLocation: 'svg-logos',
    }
    ,
    {
      imageID: '2',
      ImageName: 'BMW Logo',
      ImageDiscName: 'bmw',
      ImageDiscLocation: 'svg-logos',
    }
    ,
    {
      imageID: '3',
      ImageName: 'Kia Logo',
      ImageDiscName: 'kia',
      ImageDiscLocation: 'svg-logos',
    }
    // ,
    // {
    //   imageID: '2',
    //   ImageName: 'Nissan and Future Motors Logo',
    //   ImageDiscName: 'nissan-future-motors',
    //   ImageDiscLocation: 'svg-logos',
    // }
  ]

  themeBrandData: themeBrands [] = [
    {
      brandValue: "ford",
      brandName: "Ford"
    },
    {
      brandValue: "no",
      brandName: "No Logo"
    },
    {
      brandValue: "acura",
      brandName: "Acura"
    },
    {
      brandValue: "aston-martin",
      brandName: "Aston Martin"
    },
    {
      brandValue: "bentley",
      brandName: "Bentley"
    },
    {
      brandValue: "bmw",
      brandName: "BMW"
    },
    {
      brandValue: "bmwservice",
      brandName: "BMW Service"
    },
    {
      brandValue: "chrysler",
      brandName: "Chrysler"
    },
    {
      brandValue: "cupra",
      brandName: "Cupra"
    },
    {
      brandValue: "dacia",
      brandName: "Dacia"
    },
    {
      brandValue: "dodge",
      brandName: "Dodge"
    },
    {
      brandValue: "futuremotors",
      brandName: "Future Motors"
    },
    {
      brandValue: "genesis-white",
      brandName: "Genesis (white)"
    },
    {
      brandValue: "hino",
      brandName: "Hino"
    },
    {
      brandValue: "hyundai",
      brandName: "Hyundai"
    },
    {
      brandValue: "infiniti",
      brandName: "Infiniti"
    },
    {
      brandValue: "jeep",
      brandName: "Jeep"
    },
    {
      brandValue: "jaguar",
      brandName: "Jaguar"
    },
    {
      brandValue: "kia",
      brandName: "Kia"
    },
    {
      brandValue: "land-rover",
      brandName: "Land Rover"
    },
    {
      brandValue: "mclaren",
      brandName: "Mclaren"
    },
    {
      brandValue: "mercedes",
      brandName: "Mercedes"
    },
    {
      brandValue: "mg",
      brandName: "MG"
    },
    {
      brandValue: "mini",
      brandName: "Mini"
    },
    {
      brandValue: "nissan",
      brandName: "Nissan"
    },
    {
      brandValue: "peugeot",
      brandName: "Paugeot"
    },
    {
      brandValue: "ram",
      brandName: "Ram"
    },
    {
      brandValue: "sea-doo",
      brandName: "Sea-Doo"
    },
    {
      brandValue: "skoda",
      brandName: "Skoda"
    },
    {
      brandValue: "text2drive",
      brandName: "Text2Drive"
    },
    {
      brandValue: "toyota",
      brandName: "Toyota"
    }

  ];


}



