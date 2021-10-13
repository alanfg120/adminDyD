import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventariosRoutingModule } from './inventarios-routing.module';
import { InventariosComponent } from './views/inventarios/inventarios.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddProductoInventarioComponent } from './views/add-producto-inventario/add-producto-inventario.component';


@NgModule({
  declarations: [
    InventariosComponent,
    AddProductoInventarioComponent
  ],
  imports: [
    CommonModule,
    InventariosRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class InventariosModule { }
