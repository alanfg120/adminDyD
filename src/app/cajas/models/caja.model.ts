/* eslint-disable @typescript-eslint/naming-convention */
import { Gasto } from 'src/app/gastos/models/gastos.model';
import { Inventario } from 'src/app/inventarios/models/inventario.model';

export interface Caja {
  id?: number;
  fecha: Date | string;
  base: number;
  inventarios?: Inventario[];
  gastos?: Gasto[];
}
