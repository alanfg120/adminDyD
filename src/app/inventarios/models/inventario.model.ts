/* eslint-disable @typescript-eslint/naming-convention */
import { Producto } from 'src/app/productos/model/producto.model';

export interface Inventario {
  cantidad: number;
  cantidad_vendida?: number;
  fecha: Date;
  producto: Producto;
}
