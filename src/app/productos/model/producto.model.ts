export interface Producto {
  id?: number;
  imagen?: string;
  nombre: string;
  descripcion: string;
  cantidad?: number;
  precio: number;
  costo?: number;
  fecha?: Date;
}
