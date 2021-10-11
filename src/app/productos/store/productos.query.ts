import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Producto } from '../model/producto.model';
import { ProductosStore, ProductosState } from './productos.store';

@Injectable({ providedIn: 'root' })
export class ProductosQuery extends Query<ProductosState> {
  public state = this.select();

  constructor(
    protected store: ProductosStore,
    private routerQuery: RouterQuery
  ) {
    super(store);
  }

  selectProducto(id: number): Producto {
    const productos = this.getValue().productos;
    const index = productos.findIndex((p) => p.id === id);
    return productos[index];
  }
}
