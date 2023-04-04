import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraVolumenComponent } from './components/barra-volumen/barra-volumen.component';
import { ListaCancionesComponent } from './components/lista-canciones/lista-canciones.component';



@NgModule({
  declarations: [
    BarraVolumenComponent,
    ListaCancionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
