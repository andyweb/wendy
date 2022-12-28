import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderStepsPageRoutingModule } from './order-steps-routing.module';

import { OrderStepsPage } from './order-steps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderStepsPageRoutingModule
  ],
  declarations: [OrderStepsPage]
})
export class OrderStepsPageModule {}
