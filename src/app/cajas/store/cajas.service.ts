import { Injectable } from '@angular/core';
import { InventariosRepocitorioService } from 'src/app/inventarios/data/inventarios-repocitorio.service';
import { Inventario } from 'src/app/inventarios/models/inventario.model';
import { InventarioDb } from 'src/app/inventarios/models/inventarioPost.mdel';
import { CajasRepositorioService } from '../data/cajas-repositorio.service';
import { Caja } from '../models/caja.model';
import { CajasStore } from './cajas.store';

@Injectable({
  providedIn: 'root',
})
export class CajasService {
  constructor(
    private store: CajasStore,
    private repositorio: CajasRepositorioService,
    private repoInventario: InventariosRepocitorioService
  ) {}

  async getCajas(): Promise<void> {
    try {
      const cajas = await this.repositorio.getCajas();
      this.store.update({ cajas, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  async addCaja(caja: Caja): Promise<void> {
    try {
      const newCaja = await this.repositorio.addCajas(caja);
      newCaja.inventarios = [];
      this.store.update((state) => {
        state.cajas.push(newCaja);
        return {
          ...state,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCaja(id: number, index: number): Promise<boolean> {
    try {
      const deleteCaja = await this.repositorio.deleteCaja(id);
      if (deleteCaja) {
        this.store.update((state) => {
          state.cajas.splice(index, 1);
          return {
            ...state,
          };
        });
      }
      return deleteCaja;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async updateCaja(caja: Caja): Promise<boolean> {
    try {
      const update = await this.repositorio.updateCaja(caja);
      if (update) {
        this.store.update((state) => {
          const index = state.cajas.findIndex((c) => c.id === caja.id);
          state.cajas.splice(index, 1, caja);
          return {
            ...state,
          };
        });
      }
      return update;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateInventario(
    idCaja: number,
    inventario: Inventario,
    indexInventario: number
  ): Promise<boolean> {
    try {
      const update = await this.repoInventario.updateInventario(
        inventario.producto.id,
        inventario.cantidad
      );
      if (update) {
        this.store.update((state) => {
          const index = state.cajas.findIndex((c) => c.id === idCaja);
          state.cajas[index].inventarios.splice(indexInventario, 1, inventario);
          return {
            ...state,
          };
        });
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async deleteInventario(
    idCaja: number,
    idProducto: number,
    indexInventario: number
  ): Promise<boolean> {
    try {
      const deleteInventario = await this.repoInventario.deleteInventario(
        idProducto,
        idCaja
      );
      if (deleteInventario) {
        this.store.update((state) => {
          const index = state.cajas.findIndex((c) => c.id === idCaja);
          state.cajas[index].inventarios.splice(indexInventario, 1);
          return {
            ...state,
          };
        });
        return deleteInventario;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addProductoToInventario(inventario: InventarioDb): Promise<void> {
    try {
      const newInventario = await this.repoInventario.addProductoInventario(
        inventario
      );
      this.store.update((state) => {
        const index = state.cajas.findIndex((c) => c.id === inventario.id_caja);
        state.cajas[index].inventarios.push(newInventario);
        return { ...state };
      });
    } catch (error) {
      console.log(error);
    }
  }
}
