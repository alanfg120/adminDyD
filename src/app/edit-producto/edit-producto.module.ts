import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductoRoutingModule } from './edit-producto-routing.module';
import { EditProductoComponent } from './views/edit-producto/edit-producto.component';
import { AddProductosComponent } from '../addproductos/views/add-productos/add-productos.component';
import { AddproductosModule } from '../addproductos/addproductos.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [EditProductoComponent],
  imports: [
    CommonModule,
    EditProductoRoutingModule,
    AddproductosModule,
    FormsModule,
    IonicModule,
  ],
})
export class EditProductoModule {}
