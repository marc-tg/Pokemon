import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private url = "/.netlify/functions";

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<any> {
    return this.http.get(`${this.url}/pokemon`);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.url}/pokemon-name?name=${name}`);
  }
}
