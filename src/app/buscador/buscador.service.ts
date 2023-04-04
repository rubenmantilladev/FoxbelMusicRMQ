import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscadorService {

  private apiUrl = 'https://api.deezer.com/search'

  constructor(private http: HttpClient) {}

  buscarCanciones(searchFor: string, searchTerm: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${searchFor}?q=${searchTerm}`);
  }
}
