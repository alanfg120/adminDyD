import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CajasStore, CajasState } from './cajas.store';

@Injectable({ providedIn: 'root' })
export class CajasQuery extends Query<CajasState> {
  public state = this.select();
  constructor(protected store: CajasStore) {
    super(store);
  }

}
