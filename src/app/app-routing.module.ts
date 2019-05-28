import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'receipt', component: ReceiptComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
