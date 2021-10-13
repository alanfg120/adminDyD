/* eslint-disable @typescript-eslint/naming-convention */
export interface Gasto {
  id?: number;
  descripcion: string;
  id_caja?: number;
  costo: number;
  fecha?: Date | string;
}
