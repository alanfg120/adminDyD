/* eslint-disable @typescript-eslint/naming-convention */
import { Caja } from 'src/app/cajas/models/caja.model';
import { ProductoFacturado } from './productoFacturados.model';

export interface Venta {
  numero: number;
  productos: ProductoFacturado[];
  id_caja?: number;
  total?: number;
  subtotal?: number;
  fecha: Date;
}
