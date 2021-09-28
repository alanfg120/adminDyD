import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosRepositorioService } from '../data/productos-repositorio.service';
import { Producto } from '../model/producto.model';
import { ProductosStore } from './productos.store';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(
    private store: ProductosStore,
    private repositorio: ProductosRepositorioService
  ) {}

  addProducto(producto: FormData): void {
    this.repositorio.addProducto(producto).subscribe(
      (newProducto) => {
        this.store.update((state) => {
          state.productos.concat(newProducto);
          return {
            ...state,
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
