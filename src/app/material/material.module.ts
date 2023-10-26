import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// Material CDK component bases
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    DragDropModule,
    FormsModule,
    OverlayModule,
    CdkAccordionModule
  ]
})
export class MaterialModule { }








// Original code after upgrade to 15 like

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import { FormsModule } from '@angular/forms';
//
// // Material Form Controls
// import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
// import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
// import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
// import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
// import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
// import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
// import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
//
// // Material Navigation
// import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// // Material Layout
// import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
// import { MatTreeModule } from '@angular/material/tree';
// // Material Buttons & Indicators
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
// import { MatIconModule } from '@angular/material/icon';
// import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
// import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
// import { MatRippleModule } from '@angular/material/core';
// // Material Popups & Modals
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
// import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
// import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
// // Material Data tables
// import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
// // Material CDK component bases
// import {OverlayModule} from '@angular/cdk/overlay';
// import {CdkAccordionModule} from '@angular/cdk/accordion';
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     MatAutocompleteModule,
//     MatCheckboxModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRadioModule,
//     MatSelectModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatMenuModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatDividerModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatListModule,
//     MatStepperModule,
//     MatTabsModule,
//     MatTreeModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatBadgeModule,
//     MatChipsModule,
//     MatIconModule,
//     MatProgressSpinnerModule,
//     MatProgressBarModule,
//     MatRippleModule,
//     MatBottomSheetModule,
//     MatDialogModule,
//     MatSnackBarModule,
//     MatTooltipModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatTableModule,
//     FormsModule
//   ],
//   exports: [
//     MatAutocompleteModule,
//     MatCheckboxModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRadioModule,
//     MatSelectModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatMenuModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatDividerModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatListModule,
//     MatStepperModule,
//     MatTabsModule,
//     MatTreeModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatBadgeModule,
//     MatChipsModule,
//     MatIconModule,
//     MatProgressSpinnerModule,
//     MatProgressBarModule,
//     MatRippleModule,
//     MatBottomSheetModule,
//     MatDialogModule,
//     MatSnackBarModule,
//     MatTooltipModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatTableModule,
//     DragDropModule,
//     FormsModule,
//     OverlayModule,
//     CdkAccordionModule
//   ]
// })
// export class MaterialModule { }
