import { Injectable } from '@angular/core';
import { CajasRepositorioService } from '../data/cajas-repositorio.service';
import { Caja } from '../models/caja.model';
import { CajasStore } from './cajas.store';

@Injectable({
  providedIn: 'root',
})
export class CajasService {
  constructor(
    private store: CajasStore,
    private repositorio: CajasRepositorioService
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
          const index = state.cajas.findIndex((c)=>c.id === caja.id);
          state.cajas.splice(index, 1,caja);
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
}
