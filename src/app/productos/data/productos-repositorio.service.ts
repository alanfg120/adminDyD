import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductosRepositorioService {
  constructor(private http: HttpClient) {}

  addProducto(producto: FormData): Observable<Producto> {
    return this.http.post<Producto>(`${environment.apiUrl}/productos/add`,producto);
  }
}
