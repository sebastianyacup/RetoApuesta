import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { VentaRecarga } from 'src/app/Modelo/VentaRecarga';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  VentaRecargas!: VentaRecarga[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getRegistrodeVentas().subscribe(
      data => {
        console.log('Datos recibidos del servicio:', data);
        this.VentaRecargas = data;
        console.log('Longitud de VentaRecargas:', this.VentaRecargas.length);
      },
      error => {
        console.error('Error al obtener datos de ventas de recargas:', error);
      }
    );
  }

  formatValue(value: number): string {
    const formattedValue = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    return formattedValue.replace('COP', 'cop');
  }
}
