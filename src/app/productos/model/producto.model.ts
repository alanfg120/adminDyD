export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  costo: number;
  fecha?: Date;
}
