/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inventario } from '../models/inventario.model';
import { InventarioDb } from '../models/inventarioPost.mdel';

@Injectable({
  providedIn: 'root',
})
export class InventariosRepocitorioService {
  constructor(private http: HttpClient) {}

  addProductoInventario(inventario: InventarioDb): Promise<Inventario> {
    return this.http
      .post<Inventario>(`${environment.apiUrl}/inventarios/add`, inventario)
      .toPromise();
  }
  updateInventario(id_producto: number, cantidad: number): Promise<boolean> {
    return this.http
      .put<boolean>(`${environment.apiUrl}/inventarios/update`, {
        id_producto,
        cantidad,
      })
      .toPromise();
  }
  deleteInventario(id_producto: number,id_caja: number): Promise<boolean> {
    return this.http
      .delete<boolean>(`${environment.apiUrl}/inventarios/${id_producto}/${id_caja}`)
      .toPromise();
  }
}
