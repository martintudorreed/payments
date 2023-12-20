import { Component, ElementRef, ViewChild, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {LocalDataService} from "../services/local-data.service";
import {DialogPaymentAppComponent} from "../dialog-payment-app/dialog-payment-app.component";
import {OverlayModule} from '@angular/cdk/overlay';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-control-grid-filters-dropdown',
  templateUrl: './control-grid-filters-dropdown.component.html',
  styleUrls: ['./control-grid-filters-dropdown.component.scss']
})
export class ControlGridFiltersDropdownComponent {

  @ViewChild('overlayTemplate', { static: true }) overlayTemplate!: TemplateRef<any>;
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef;
  @ViewChild('inputOverlayTemplate', { static: true }) inputOverlayTemplate!: TemplateRef<any>;
  @ViewChild('inputContainerRef', { static: true }) inputContainerRef!: ElementRef;
  private overlayRef: OverlayRef | null = null;
  private inputOverlayRef: OverlayRef | null = null;

  @Input() isStandalone: boolean = false;
  @Input() isBlue: boolean = false;
  @Input() hasSearchLabel: boolean = true;
  search: string = '';
  dpicker: string = '';
  dpicker1: string = '';
  currentSearchCriteria: string = 'All Fields';

  isFilterMenuOpen: boolean = false;
  inputHasFocus: boolean = false;

  payments = this.localDataService.paymentListData;
  statusFilters = this.localDataService.statusFilterItemsData;
  createdByFilters = this.localDataService.createdByFilterItemsData;
  dealershipFilters = this.localDataService.dealershipFilterItemsData;
  areThereAnyFiltersSet: boolean = false;

  searchHistoryItems = this.localDataService.recentSearchTermData

  paymentIdNo: number = -1;
  paymentCustomerName: string = '';
  paymentDateRaised: string =  '';
  paymentSource: string = '';
  paymentStatus: string = 'New Payment';
  paymentStatusId: number = 5;
  paymentTransactionProviderId: number = 0;
  paymentTransactionNumber: string = '';
  paymentTransactionTotalExTax: number = 0.00;
  paymentTransactionTotalTax: number = 0.00;
  paymentTransactionTotalIncTax: number = 0.00;
  paymentTransactionCreatedOn: string = '';
  paymentTransactionCreatedBy: string = '';
  paymentTransactionExpiry: string = '';
  paymentCustomerForename: string = '';
  paymentCustomerSurname: string = '';
  paymentCustomerTelNo: string = '';
  paymentCustomerEmail: string = '';
  paymentAddress1: string = '';
  paymentAddress2: string = '';
  paymentAddress3: string = '';
  paymentState: string = '';
  paymentPostCode: string = '';
  paymentVehicle: string = '';
  paymentInvoiceLines: string = '';

  areFiltersActive: boolean = false;

  offsetyFilters: number = 50;
  offsetyHistory: number = 46;

  constructor(public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private localDataService: LocalDataService,
              private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
              private _snackBar: MatSnackBar,) {
  }

  doOpenFormInDialog() {
    this.applicationModelService.isInIframe$.next(true);
    // this.applicationModelService.isInIframeDataValue$.next(this.dataItemIndexNo);

    this.payments.push({
      paymentIdNo: this.payments.length,
      paymentCustomerName:  this.paymentCustomerName,
      paymentDateRaised: this.paymentDateRaised,
      paymentSource: this.paymentSource,
      paymentStatus: this.paymentStatus,
      paymentStatusId: this.paymentStatusId,
      paymentTransactionProviderId: this.paymentTransactionProviderId,
      paymentTransactionNumber: this.paymentTransactionNumber,
      paymentTransactionTotalExTax: this.paymentTransactionTotalExTax,
      paymentTransactionTotalTax: this.paymentTransactionTotalTax,
      paymentTransactionTotalIncTax: this.paymentTransactionTotalIncTax,
      paymentTransactionCreatedOn: this.paymentTransactionCreatedOn,
      paymentTransactionCreatedBy: this.paymentTransactionCreatedBy,
      paymentTransactionExpiry: this.paymentTransactionExpiry,
      paymentCustomerForename: this.paymentCustomerForename,
      paymentCustomerSurname: this.paymentCustomerSurname,
      paymentCustomerTelNo: this.paymentCustomerTelNo,
      paymentCustomerEmail: this.paymentCustomerEmail,
      paymentAddress1: this.paymentAddress1,
      paymentAddress2: this.paymentAddress2,
      paymentAddress3: this.paymentAddress3,
      paymentState: this.paymentState,
      paymentPostCode: this.paymentPostCode,
      paymentVehicle: this.paymentVehicle,
      paymentInvoiceLines: this.paymentInvoiceLines,
    })

    this.applicationModelService.currentPaymentIndexNumber$.next(this.payments.length -1);
    // touch the form to refresh.
    const eek = this.applicationModelService.currentTemplateIdViewer$.getValue();
    this.applicationModelService.currentTemplateIdViewer$.next(eek);


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

  doToggleMultiDealershipsInTable() {}

  openOverlay() {
    if ( this.applicationModelService.isUseCompactSearchFilter$.getValue() === true) {
      this.offsetyFilters = 40;
    } else {
      this.offsetyFilters = 50;
    }
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.containerRef)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: this.offsetyFilters,
      }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'transparent-backdrop'
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
      this.overlayRef = null;
    });

    const templatePortal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);
  }

  openInputOverlay() {
    if ( this.applicationModelService.isUseCompactSearchFilter$.getValue() === true) {
      this.offsetyHistory = 36;
    } else {
      this.offsetyHistory = 46;
    }
    if(this.searchHistoryItems.length > 0) {
      this.inputHasFocus = true;
      if (this.inputOverlayRef) {
        this.inputOverlayRef.dispose();
        this.inputHasFocus = false;
      }

      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(this.inputContainerRef)
        .withPositions([{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: this.offsetyHistory,
          offsetX: -1
        }]);

      this.inputOverlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'transparent-backdrop'
      });

      this.inputOverlayRef.backdropClick().subscribe(() => {
        this.inputOverlayRef?.dispose();
        this.inputOverlayRef = null;
        this.inputHasFocus = false;
      });

      const templatePortal = new TemplatePortal(this.inputOverlayTemplate, this.viewContainerRef);
      this.inputOverlayRef.attach(templatePortal);
    }

  }

  changeSearchCriteria(crit: string) {
    this.currentSearchCriteria = crit;
  }

  checkIfAnyFiltersAreSet() {
    if(this.applicationModelService.chipFilterStatusIsSet$.getValue() || this.applicationModelService.chipFilterCreatedByIsSet$.getValue() || this.applicationModelService.chipFilterDealershipIsSet$.getValue() || this.dpicker !== '' || this.dpicker1 !== '') {
      return true;
    } else {
      return false;
    }
  }

  doResetAllFilters() {
    this.dpicker1 = '';
    this.dpicker = '';
    // by touching this observable it will trigger a reset in all chip lists controls
    this.applicationModelService.triggerToClearChipLists$.next(true);
  }

  doSetSearchTerm(term: string) {
    this.search = term;
    this.inputOverlayRef?.dispose();
    this.inputOverlayRef = null;
  }

  doSearch() {
    this._snackBar.open('Smoke and Mirrors' , '', {
      duration: 3000,
      panelClass: 'ifm-snackbar'
    });
  }
}


