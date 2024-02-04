import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaRecarga } from 'src/app/Modelo/VentaRecarga';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit(): void {
  }
  VentaRecarga:VentaRecarga = new VentaRecarga();
  Guardar(){
    this.service.RegistrarVenta(this.VentaRecarga)
    .subscribe(data => {
      alert("La venta se realizo con exito  ....!!"   +  this.VentaRecarga.operador + " "+ this.VentaRecarga.valor + " " + this.VentaRecarga.vendedor)
      this.router.navigate(["listar"]);
    })
  }

}
