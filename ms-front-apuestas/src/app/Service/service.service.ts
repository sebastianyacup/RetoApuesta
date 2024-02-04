import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentaRecarga } from '../Modelo/VentaRecarga';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'http://localhost:8080/api/recargas';

  getRegistrodeVentas() {
    return this.http.get<VentaRecarga[]>(this.apiUrl);
  }

  RegistrarVenta(ventaRecarga: VentaRecarga) {
    return this.http.post<VentaRecarga>(this.apiUrl, ventaRecarga);
  }

  getPorOperador(operador: string) {
    const url = `${this.apiUrl}/por-operador/${operador}`;
    return this.http.get<VentaRecarga[]>(url);
  }

  getPorVendedor(vendedor: string) {
    const url = `${this.apiUrl}/por-vendedor/${vendedor}`;
    return this.http.get<VentaRecarga[]>(url);
  }
  
}
