import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStepsPage } from './order-steps.page';

const routes: Routes = [
  {
    path: '',
    component: OrderStepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStepsPageRoutingModule {}
