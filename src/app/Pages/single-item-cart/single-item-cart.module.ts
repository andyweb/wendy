import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleItemCartPageRoutingModule } from './single-item-cart-routing.module';

import { SingleItemCartPage } from './single-item-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleItemCartPageRoutingModule,
  ],
  declarations: [SingleItemCartPage],
  exports: [SingleItemCartPage],
})
export class SingleItemCartPageModule {}
