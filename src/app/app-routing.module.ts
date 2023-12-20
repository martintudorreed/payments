import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentComponent } from "./view-payment/view-payment.component";
import { ViewPaymentIndexComponent } from "./view-payment-index/view-payment-index.component";
import { ViewTabbedWorkspaceComponent } from "./view-tabbed-workspace/view-tabbed-workspace.component";
import { ViewPaymentTableOnlyComponent } from "./view-payment-table-only/view-payment-table-only.component";
import { ViewPaymentFormOnlyComponent} from "./view-payment-form-only/view-payment-form-only.component";
import { ViewPaymentFormNewComponent } from "./view-payment-form-new/view-payment-form-new.component";
import { ViewPhaseIComponent } from "./view-phase-i/view-phase-i.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'customer-payment',
    component: ViewPaymentComponent,
  },
  {
    path: 'payment-index',
    component: ViewPaymentIndexComponent,
  },
  {
    path: 'home',
    component: ViewPhaseIComponent,
  },
  {
    path: 'payment-table-only',
    component: ViewPaymentTableOnlyComponent,
  },
  {
    path: 'payment-form-only',
    component: ViewPaymentFormOnlyComponent,
  },
  {
    path: 'payment-form-new',
    component: ViewPaymentFormNewComponent,
  },
  {
    path: 'phaseII',
    component: ViewTabbedWorkspaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
