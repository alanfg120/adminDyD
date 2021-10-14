import { Producto } from 'src/app/productos/model/producto.model';

export interface ProductoFacturado {
  cantidad: number;
  producto: Producto;
}
