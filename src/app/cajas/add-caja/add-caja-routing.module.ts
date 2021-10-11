import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCajaComponent } from './views/add-caja/add-caja.component';

const routes: Routes = [
 {
   path : '',
   component:AddCajaComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCajaRoutingModule { }
