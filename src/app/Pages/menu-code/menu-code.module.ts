import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCodePageRoutingModule } from './menu-code-routing.module';

import { MenuCodePage } from './menu-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCodePageRoutingModule
  ],
  declarations: [MenuCodePage]
})
export class MenuCodePageModule {}
