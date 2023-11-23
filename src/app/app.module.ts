import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { ControlsPaymentFormComponent } from './controls-payment-form/controls-payment-form.component';
import { ViewPaymentIndexComponent } from './view-payment-index/view-payment-index.component';
import { DialogSendToCustomerComponent } from './dialog-send-to-customer/dialog-send-to-customer.component';
import { ControlProviderSelectComponent } from './control-provider-select/control-provider-select.component';
import { DialogPaymentAppComponent } from './dialog-payment-app/dialog-payment-app.component';
import { TablePaymentListComponent } from './table-payment-list/table-payment-list.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { ViewTabbedWorkspaceComponent } from './view-tabbed-workspace/view-tabbed-workspace.component';
import { FormNewPaymentComponent } from './form-new-payment/form-new-payment.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ControlGridFiltersComponent } from './control-grid-filters/control-grid-filters.component';
import { ControlGridStatusFilterComponent } from './control-grid-status-filter/control-grid-status-filter.component';
import { ControlEditableEmailTemplateComponent } from './control-editable-email-template/control-editable-email-template.component';
import { ControlChipFilterComponent } from './control-chip-filter/control-chip-filter.component';
import { ControlEditableSmsTemplateComponent } from './control-editable-sms-template/control-editable-sms-template.component';
import { DialogCustomerFormComponent } from './dialog-customer-form/dialog-customer-form.component';
import { FormCustomerPaymentComponent } from './form-customer-payment/form-customer-payment.component';
import { DialogLoadFromApplicationDatasourceComponent } from './dialog-load-from-application-datasource/dialog-load-from-application-datasource.component';
import { TableTriageDataComponent } from './table-triage-data/table-triage-data.component';
import { ControlSerachInputComponent } from './control-serach-input/control-serach-input.component';
import { ArchivedDisplayInvoiceFromDataComponent } from './archived-display-invoice-from-data/archived-display-invoice-from-data.component';
import { ViewPaymentTableOnlyComponent } from './view-payment-table-only/view-payment-table-only.component';
import { ViewPaymentFormOnlyComponent } from './view-payment-form-only/view-payment-form-only.component';
import { ResizableModule } from 'angular-resizable-element';
import { NgxDocViewerModule} from "ngx-doc-viewer";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewPaymentFormNewComponent } from './view-payment-form-new/view-payment-form-new.component';
import { ControlDisplaySendMethodsComponent } from './control-display-send-methods/control-display-send-methods.component';
import { ControlDocumentViewerComponent } from './control-document-viewer/control-document-viewer.component';
import { DialogFullSecrrenDocViewerComponent } from './dialog-full-secrren-doc-viewer/dialog-full-secrren-doc-viewer.component';
import { ControlEmailViewerComponent } from './control-email-viewer/control-email-viewer.component';
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { ControlTemplateViewerComponent } from './control-template-viewer/control-template-viewer.component';
import { ControlTemplateEditorComponent } from './control-template-editor/control-template-editor.component';
import { ViewEmailTemplatesComponent } from './view-email-templates/view-email-templates.component';
import { ControlChipIfmAppsComponent } from './control-chip-ifm-apps/control-chip-ifm-apps.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';
import { SettingsDisclaimersComponent } from './settings-disclaimers/settings-disclaimers.component';
import { DialogFullScreenEmailViewerComponent } from './dialog-full-screen-email-viewer/dialog-full-screen-email-viewer.component';
import { ControlImageManagerComponent } from './control-image-manager/control-image-manager.component';
import { SettingsCustomerFormComponent } from './settings-customer-form/settings-customer-form.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import { SettingsEmailDetailsComponent } from './settings-email-details/settings-email-details.component';
import { ControlEmailDetailsComponent } from './control-email-details/control-email-details.component';
import { SettingsEmailComponent } from './settings-email/settings-email.component';
import { DialogWelcomeComponent } from './dialog-welcome/dialog-welcome.component';
import { HeaderTriageComponent } from './header-triage/header-triage.component';
import { HeaderMenusComponent } from './header-menus/header-menus.component';
import { ControlSmsTemplateViewerComponent } from './control-sms-template-viewer/control-sms-template-viewer.component';
import { DialogMarkAsPaidComponent } from './dialog-mark-as-paid/dialog-mark-as-paid.component';
import { DialogCancelTransactionComponent } from './dialog-cancel-transaction/dialog-cancel-transaction.component';

const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,
    ViewPaymentComponent,
    ControlsPaymentFormComponent,
    ViewPaymentIndexComponent,
    DialogSendToCustomerComponent,
    ControlProviderSelectComponent,
    DialogPaymentAppComponent,
    TablePaymentListComponent,
    HeaderComponent,
    HeaderTwoComponent,
    ViewTabbedWorkspaceComponent,
    FormNewPaymentComponent,
    ViewSettingsComponent,
    ControlGridFiltersComponent,
    ControlGridStatusFilterComponent,
    ControlEditableEmailTemplateComponent,
    ControlChipFilterComponent,
    ControlEditableSmsTemplateComponent,
    DialogCustomerFormComponent,
    FormCustomerPaymentComponent,
    DialogLoadFromApplicationDatasourceComponent,
    TableTriageDataComponent,
    ControlSerachInputComponent,
    ArchivedDisplayInvoiceFromDataComponent,
    ViewPaymentTableOnlyComponent,
    ViewPaymentFormOnlyComponent,
    ViewPaymentFormNewComponent,
    ControlDisplaySendMethodsComponent,
    ControlDocumentViewerComponent,
    DialogFullSecrrenDocViewerComponent,
    ControlEmailViewerComponent,
    SafeHtmlPipe,
    ControlTemplateViewerComponent,
    ControlTemplateEditorComponent,
    ViewEmailTemplatesComponent,
    ControlChipIfmAppsComponent,
    SettingsGeneralComponent,
    SettingsDisclaimersComponent,
    DialogFullScreenEmailViewerComponent,
    ControlImageManagerComponent,
    SettingsCustomerFormComponent,
    SettingsEmailDetailsComponent,
    ControlEmailDetailsComponent,
    SettingsEmailComponent,
    DialogWelcomeComponent,
    HeaderTriageComponent,
    HeaderMenusComponent,
    ControlSmsTemplateViewerComponent,
    DialogMarkAsPaidComponent,
    DialogCancelTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ReactiveFormsModule,
    ResizableModule,
    NgxDocViewerModule,
    PdfViewerModule,
    ReactiveFormsModule,
    CdkMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
