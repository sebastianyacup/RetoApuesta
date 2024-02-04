import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { VentaRecarga } from 'src/app/Modelo/VentaRecarga';

@Component({
  selector: 'app-operadorxpersona',
  templateUrl: './operadorxpersona.component.html',
  styleUrls: ['./operadorxpersona.component.css']
})
export class OperadorxpersonaComponent implements OnInit {
  operador!: string;
  vendedor!: string;
  VentaRecargasPorOperador: VentaRecarga[] = [];
  VentaRecargasPorVendedor: VentaRecarga[] = [];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  getPorOperador(): void {
    this.service.getPorOperador(this.operador).subscribe(
      (data) => {
        console.log('Datos recibidos del servicio (filtrados por operador):', data);
        if (data.length > 0) {
          this.VentaRecargasPorOperador = data;
        } else {
          alert('No hay alguna venta con ese operador.');
        }
      },
      (error) => {
        console.error('Error al obtener datos de ventas filtradas por operador:', error);
      }
    );
  }

  getPorVendedor(): void {
    this.service.getPorVendedor(this.vendedor).subscribe(
      (data) => {
        console.log('Datos recibidos del servicio (filtrados por vendedor):', data);
        if (data.length > 0) {
          this.VentaRecargasPorVendedor = data;
        } else {
          alert('No se encuentra ninguna venta con el nombre del vendedor.');
        }
      },
      (error) => {
        console.error('Error al obtener datos de ventas filtradas por vendedor:', error);
      }
    );
  }
}
