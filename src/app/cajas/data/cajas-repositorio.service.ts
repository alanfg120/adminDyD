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
}
