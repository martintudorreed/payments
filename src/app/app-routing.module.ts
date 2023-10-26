import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentComponent } from "./view-payment/view-payment.component";
import { ViewPaymentIndexComponent } from "./view-payment-index/view-payment-index.component";

const routes: Routes = [
  { path: '', redirectTo: 'payment-index', pathMatch: 'full' },
  {
    path: 'customer-payment',
    component: ViewPaymentComponent,
  },
  {
    path: 'payment-index',
    component: ViewPaymentIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
