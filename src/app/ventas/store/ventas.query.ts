import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { VentasStore, VentasState } from './ventas.store';

@Injectable({ providedIn: 'root' })
export class VentasQuery extends Query<VentasState> {
  public state = this.select();
  constructor(protected store: VentasStore) {
    super(store);
  }
}
