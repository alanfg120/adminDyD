import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCajaRoutingModule } from './edit-caja-routing.module';
import { EditCajaComponent } from './views/edit-caja/edit-caja.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditCajaComponent
  ],
  imports: [
    CommonModule,
    EditCajaRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class EditCajaModule { }
