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

  async addProducto(producto: FormData): Promise<boolean> {
    try {
      const newProducto = await this.repositorio.addProducto(producto);
      this.store.update((state) => {
        state.productos.push(newProducto);
        return {
          ...state,
        };
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getProductos(): Promise<void> {
    try {
      const productos = await this.repositorio.getProductos();
      this.store.update({ productos });
      this.store.update({ loading: false });
    } catch (error) {
      console.log('Error', error);
    }
  }
  async deleteProducto(id: number, index: number): Promise<boolean> {
    try {
      const deleteProducto = await this.repositorio.deleteProducto(id);
      if (deleteProducto) {
        this.store.update((state) => {
          state.productos.splice(index, 1);
          return { ...state };
        });
      }
      return deleteProducto;
    } catch (error) {
      console.log('Error', error);
    }
  }
  async updateProducto(formData: FormData, producto: Producto): Promise<boolean> {
    try {
      const updateProducto = await this.repositorio.updateProducto(formData);
      if (updateProducto) {
        this.store.update((state) => {
          const index = state.productos.findIndex((p) => p.id === producto.id);
          state.productos.splice(index, 1,producto);
          return { ...state };
        });
      }
      return updateProducto;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
