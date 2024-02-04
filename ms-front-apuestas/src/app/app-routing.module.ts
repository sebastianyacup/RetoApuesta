import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Ventas/listar/listar.component';
import { RegistrarComponent } from './Ventas/registrar/registrar.component';
import { OperadorxpersonaComponent } from './Ventas/operadorxpersona/operadorxpersona.component';

const routes: Routes = [
  {path: 'listar' , component: ListarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'operadorxpersona', component: OperadorxpersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
