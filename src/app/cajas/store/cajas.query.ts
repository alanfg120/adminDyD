import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Caja } from '../models/caja.model';
import { CajasStore, CajasState } from './cajas.store';

@Injectable({ providedIn: 'root' })
export class CajasQuery extends Query<CajasState> {
  public state = this.select();
  constructor(protected store: CajasStore) {
    super(store);
  }
  selectCaja(id: number): Caja {
    const cajas = this.getValue().cajas;
    const index = cajas.findIndex((p) => p.id === id);
    return cajas[index];
  }
}
