import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleItemCartPage } from './single-item-cart.page';

const routes: Routes = [
  {
    path: '',
    component: SingleItemCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleItemCartPageRoutingModule {}
