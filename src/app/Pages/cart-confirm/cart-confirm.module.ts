import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartConfirmPageRoutingModule } from './cart-confirm-routing.module';

import { CartConfirmPage } from './cart-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartConfirmPageRoutingModule,
  ],
  declarations: [CartConfirmPage],
})
export class CartConfirmPageModule {}
