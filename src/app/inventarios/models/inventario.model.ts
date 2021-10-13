import { Producto } from 'src/app/productos/model/producto.model';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Inventario {
  cantidad: number;
  fecha: Date;
  producto: Producto;
}
