import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajasRoutingModule } from './cajas-routing.module';
import { CajasComponent } from './views/cajas/cajas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VentasModule } from '../ventas/ventas.module';
import { VentasByCajaComponent } from './views/ventas-by-caja/ventas-by-caja.component';


@NgModule({
  declarations: [CajasComponent, VentasByCajaComponent],
  imports: [
    CommonModule,
    CajasRoutingModule,
    IonicModule,
    FormsModule,
    VentasModule
  ]
})
export class CajasModule { }
