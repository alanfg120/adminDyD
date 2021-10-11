import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Caja } from '../models/caja.model';

export interface CajasState {
  cajas: Caja[];
  loading: boolean;
}

export const initialState: CajasState = {
  cajas: [],
  loading : true
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cajas', deepFreezeFn: (obj: unknown) => obj })
export class CajasStore extends Store<CajasState> {
  constructor() {
    super(initialState);
  }
}
