import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ProductosStore, ProductosState } from './productos.store';

@Injectable({ providedIn: 'root' })
export class ProductosQuery extends Query<ProductosState> {
  public state = this.select();
  constructor(protected store: ProductosStore) {
    super(store);
  }

}
