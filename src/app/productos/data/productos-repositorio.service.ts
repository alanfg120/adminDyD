import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Producto } from '../model/producto.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductosRepositorioService {
  constructor(private http: HttpClient) {}

  addProducto(producto: FormData): Promise<Producto> {
    return this.http.post<Producto>(`${environment.apiUrl}/productos/add`,producto).toPromise();
  }
  getProductos(): Promise<Producto[]> {
    return this.http.get<Producto[]>(`${environment.apiUrl}/productos`).toPromise();
  }

  deleteProducto(id: number): Promise<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/productos/${id}`).toPromise();
  }
}
