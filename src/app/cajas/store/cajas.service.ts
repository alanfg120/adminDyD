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
}
