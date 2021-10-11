import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCajaRoutingModule } from './add-caja-routing.module';
import { AddCajaComponent } from './views/add-caja/add-caja.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCajaComponent
  ],
  imports: [
    CommonModule,
    AddCajaRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AddCajaModule { }
