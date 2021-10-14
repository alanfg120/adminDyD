import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajasRoutingModule } from './cajas-routing.module';
import { CajasComponent } from './views/cajas/cajas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CajasComponent],
  imports: [
    CommonModule,
    CajasRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class CajasModule { }
