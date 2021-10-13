/* eslint-disable @typescript-eslint/naming-convention */
import { Producto } from 'src/app/productos/model/producto.model';

export interface Venta {
  numero: number;
  id_producto?: number;
  productos: Producto[];
  id_caja?: number;
  cantidad: number;
  total?: number;
}
