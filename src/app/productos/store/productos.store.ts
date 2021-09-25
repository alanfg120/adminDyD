import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Producto } from '../model/producto.model';

export interface ProductosState {
  productos: Producto[];
}

export const createInitialState: ProductosState = {
  productos: [],

};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'productos' , deepFreezeFn: (obj: unknown) => obj})
export class ProductosStore extends Store<ProductosState> {

  constructor() {
    super(createInitialState);
  }

}
