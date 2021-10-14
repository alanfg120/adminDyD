/* eslint-disable @typescript-eslint/naming-convention */
import { ProductoFacturado } from './productoFacturados.model';

export interface Venta {
  numero: number;
  productos: ProductoFacturado[];
  id_caja?: number;
  total?: number;
  subtotal?: number;
  fecha: Date;
}
