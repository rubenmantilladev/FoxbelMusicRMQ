import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BuscadorComponent } from './buscador.component';
import { BuscadorService } from './buscador.service';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BuscadorService],
  exports: [BuscadorComponent]
})
export class BuscadorModule { }
