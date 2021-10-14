import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Caja } from '../models/caja.model';

@Injectable({
  providedIn: 'root',
})
export class CajasRepositorioService {
  constructor(private http: HttpClient) {}

  getCajas(): Promise<Caja[]> {
    return this.http.get<Caja[]>(`${environment.apiUrl}/cajas`).toPromise();
  }
  addCajas(caja: Caja): Promise<Caja> {
    return this.http
      .post<Caja>(`${environment.apiUrl}/cajas/add`, caja)
      .toPromise();
  }
  deleteCaja(id: number): Promise<boolean> {
    return this.http
      .delete<boolean>(`${environment.apiUrl}/cajas/${id}`)
      .toPromise();
  }
  updateCaja(caja: Caja): Promise<boolean> {
    return this.http
      .put<boolean>(`${environment.apiUrl}/cajas/update`, caja)
      .toPromise();
  }

  activarCaja(id: number,activar: boolean): Promise<boolean> {
    return this.http.put<boolean>(`${environment.apiUrl}/cajas/activar`,{id,activar}).toPromise();
  }
}
