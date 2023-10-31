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
    DialogLoadFromApplicationDatasourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
