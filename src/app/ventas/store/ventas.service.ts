import { Injectable } from '@angular/core';
import { VentasRepositorioService } from '../data/ventas-repositorio.service';
import { Venta } from '../models/venta.model';
import { VentasStore } from './ventas.store';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(
    private store: VentasStore,
    private repositorio: VentasRepositorioService
  ) {}

  async getVentas(): Promise<void> {
    try {
      const ventas = await this.repositorio.getVentas();
      const ventasWithTotal = this.calcTotal(ventas);
      this.store.update({ ventas: ventasWithTotal, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  calcTotal(ventas: Venta[]) {
    const ventasWithTotal = ventas.map((venta) => {
      let total = 0;
      let subtotal = 0;
      venta.productos.forEach((productoFacturado) => {
        total =
          total +
          productoFacturado.cantidad * productoFacturado.producto.precio;
        subtotal =
          subtotal +
          productoFacturado.cantidad * productoFacturado.producto.costo;
      });
      venta.total = total;
      venta.subtotal = subtotal;
      return venta;
    });

    return ventasWithTotal;
  }
}
