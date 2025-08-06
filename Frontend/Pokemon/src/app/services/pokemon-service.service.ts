import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

private url = "http://localhost:3000/api";

  getAllPokemons(): Observable<any> {
    return this.http.get(`${this.url}/pokemon`);
  }

  getPokemonByName(name: string): Observable<any> {
  return this.http.get(`${this.url}/pokemon/${name}`);
}


}
