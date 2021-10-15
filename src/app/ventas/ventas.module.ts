import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './views/ventas/ventas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DetalleVentaComponent } from './views/detalle-venta/detalle-venta.component';


@NgModule({
  declarations: [
    VentasComponent,
    DetalleVentaComponent
  ],
  exports:[DetalleVentaComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class VentasModule { }
