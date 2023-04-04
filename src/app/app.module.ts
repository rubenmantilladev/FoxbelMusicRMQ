import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules
import { BuscadorModule } from './buscador/buscador.module';
import { ReproductorModule } from './reproductor/reproductor.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules
    BuscadorModule,
    ReproductorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
