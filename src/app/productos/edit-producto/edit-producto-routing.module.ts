import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductoComponent } from './views/edit-producto/edit-producto.component';

const routes: Routes = [
  {
    path: '',
    component: EditProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProductoRoutingModule {}
