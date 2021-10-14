import { Producto } from 'src/app/productos/model/producto.model';

export interface Inventario {
  cantidad: number;
  fecha: Date;
  producto: Producto;
}
