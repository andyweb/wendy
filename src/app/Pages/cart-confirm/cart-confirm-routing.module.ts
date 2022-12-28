import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartConfirmPage } from './cart-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CartConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartConfirmPageRoutingModule {}
