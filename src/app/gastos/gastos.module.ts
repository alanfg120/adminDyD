import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './views/gastos/gastos.component';
import { IonicModule } from '@ionic/angular';
import { AddGastoComponent } from './views/add-gasto/add-gasto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GastosComponent, AddGastoComponent],
  imports: [CommonModule, GastosRoutingModule, IonicModule, FormsModule],
})
export class GastosModule {}
