import { Component, OnInit } from '@angular/core';
import { BuscadorService } from './buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  canciones: any;

  constructor(private buscadorComponent: BuscadorService) {}

  ngOnInit(): void {
    this.buscarCanciones('album', '302127');
  }

  buscarCanciones(searchFor: string, searchTerm: string) {
    this.buscadorComponent
      .buscarCanciones(searchFor, searchTerm)
      .subscribe((data: any) => {
        this.canciones = data.data;
        console.log(this.canciones);
      });
  }
}
