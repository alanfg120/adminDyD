import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCajaComponent } from './views/edit-caja/edit-caja.component';

const routes: Routes = [
  {
    path: '',
    component: EditCajaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCajaRoutingModule {}
