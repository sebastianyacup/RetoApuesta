import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Ventas/listar/listar.component';
import { RegistrarComponent } from './Ventas/registrar/registrar.component';
import { OperadorxpersonaComponent } from './Ventas/operadorxpersona/operadorxpersona.component';
import { FormsModule } from '@angular/forms'
import { ServiceService } from '../app/Service/service.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RegistrarComponent,
    OperadorxpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
