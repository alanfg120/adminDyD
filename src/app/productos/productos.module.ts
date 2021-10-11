import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './views/productos/productos.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule, ProductosRoutingModule, IonicModule],
})
export class ProductosModule {}
