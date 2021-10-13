import { Injectable } from '@angular/core';
import { VentasStore } from './ventas.store';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(private store: VentasStore) {}
}
