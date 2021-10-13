import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gasto } from '../models/gastos.model';

@Injectable({
  providedIn: 'root',
})
export class GastosRepocitorioService {
  constructor(private http: HttpClient) {}

  addGasto(gasto: Gasto): Promise<Gasto> {
    return this.http
      .post<Gasto>(`${environment.apiUrl}/gastos/add`, gasto)
      .toPromise();
  }
  updateGasto(gasto: Gasto): Promise<boolean> {
    return this.http
      .put<boolean>(`${environment.apiUrl}/gastos/update`, gasto)
      .toPromise();
  }
  deleteGasto(idGasto: number): Promise<boolean> {
    return this.http
      .delete<boolean>(`${environment.apiUrl}/gastos/${idGasto}`)
      .toPromise();
  }
}
