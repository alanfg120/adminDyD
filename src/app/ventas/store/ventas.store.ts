import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Venta } from '../models/venta.model';

export interface VentasState {
  ventas: Venta[];
}

export const createInitialState: VentasState = {
  ventas: [],
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ventas', deepFreezeFn: (obj: unknown) => obj })
export class VentasStore extends Store<VentasState> {
  constructor() {
    super(createInitialState);
  }
}
