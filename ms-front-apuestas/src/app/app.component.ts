import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-front-apuestas';

  constructor(private router: Router){}
  buscarTodasLasVentas(){{
    this.router.navigate(['listar']);
  }}
  registrarVenta(){
    this.router.navigate(['registrar'])
  }
  buscarPorOperador(){
    this.router.navigate(['operadorxpersona'])
  }
}
