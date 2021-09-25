import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductosRoutingModule } from './addproductos-routing.module';
import { AddProductosComponent } from './views/add-productos/add-productos.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddProductosComponent],
  imports: [
    CommonModule,
    AddproductosRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AddproductosModule { }
