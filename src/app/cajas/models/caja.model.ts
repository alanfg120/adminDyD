import { Inventario } from 'src/app/inventarios/models/inventario.model';

export interface Caja {
  id?: number;
  fecha: Date | string;
  base: number;
  inventarios?: Inventario[];
}
