/* eslint-disable @typescript-eslint/naming-convention */
import { Gasto } from 'src/app/gastos/models/gastos.model';
import { Inventario } from 'src/app/inventarios/models/inventario.model';
import { Venta } from 'src/app/ventas/models/venta.model';

export interface Caja {
  id?: number;
  fecha: Date | string;
  base: number;
  inventarios?: Inventario[];
  gastos?: Gasto[];
  ventas?: Venta[];
  activa?: boolean;
}
