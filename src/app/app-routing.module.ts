import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentComponent } from "./view-payment/view-payment.component";
import { ViewPaymentIndexComponent } from "./view-payment-index/view-payment-index.component";
import { ViewTabbedWorkspaceComponent } from "./view-tabbed-workspace/view-tabbed-workspace.component";

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
    component: ViewTabbedWorkspaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
