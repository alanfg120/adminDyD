import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductosComponent } from './views/add-productos/add-productos.component';

const routes: Routes = [
  {
    path : '',
    component : AddProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductosRoutingModule { }
