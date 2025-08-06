import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {
   pokemons:any[]  = [];
   allPokemons:any[] = []
   pokemonNameFilter: string = '';
  pokemonName: string = '';

  pokemonsPerPage = 16;
    p = 1;
  constructor(private router : Router, private PokemonService : PokemonServiceService) {
    this.getAllPokemons();
    
  }
getAllPokemons() {
  this.PokemonService.getAllPokemons().subscribe((data) => {
    this.allPokemons = data;

    this.allPokemons.forEach(pokemon => {
      this.PokemonService.getPokemonByName(pokemon.name).subscribe((details) => {
        // Añadir ceros delante en id
        // let idStr = details.id.toString();
        // while (idStr.length < 3) {
        //   idStr = '0' + idStr;
        // }
        // details.id = idStr;

        // Añadir al array
        this.pokemons.push(details);

        // Ordenar por id numérico
        this.pokemons.sort((a, b) => Number(a.id) - Number(b.id));
      });
    });
  });
}


filter(name: string = this.pokemonName) {
  this.router.navigate(['/pokemon-view'], { queryParams: { name: name } });

}

viewPokemonData(name: string) {
  this.router.navigate(['/pokemon-view'], { queryParams: { name: name } });
  }

    pageChangeEvent(event: number) {
      this.p = event;
    }
  
   
}


