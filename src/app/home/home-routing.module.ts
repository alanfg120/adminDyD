import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'productos',
        loadChildren : ()=> import('./../productos/productos.module').then(m=>m.ProductosModule)
      },
      {
        path:'cajas',
        loadChildren : ()=> import('./../cajas/cajas.module').then(m=>m.CajasModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('./../ventas/ventas.module').then( m => m.VentasModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
