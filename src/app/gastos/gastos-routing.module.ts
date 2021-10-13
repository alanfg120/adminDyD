import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './views/gastos/gastos.component';

const routes: Routes = [
  {
    path: '',
    component: GastosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosRoutingModule {}
