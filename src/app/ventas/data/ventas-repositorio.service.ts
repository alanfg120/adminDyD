import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root',
})
export class VentasRepositorioService {
  constructor(private http: HttpClient) {}

  getVentas(): Promise<Venta[]> {
    return this.http.get<Venta[]>(`${environment.apiUrl}/ventas`).toPromise();
  }

}
