import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuListPageRoutingModule } from './menu-list-routing.module';

import { MenuListPage } from './menu-list.page';
import { SingleItemCartPageModule } from '../single-item-cart/single-item-cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuListPageRoutingModule,
    SingleItemCartPageModule,
  ],
  declarations: [MenuListPage],
})
export class MenuListPageModule {}
