import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'addProductos',
    loadChildren: () => import('./addproductos/addproductos.module').then( m => m.AddproductosModule)
  },
  {
    path: 'updateProducto/:id',
    loadChildren: () => import('./edit-producto/edit-producto.module').then( m => m.EditProductoModule)
  },
  {
    path: 'addCaja',
    loadChildren: () => import('./add-caja/add-caja.module').then( m => m.AddCajaModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
