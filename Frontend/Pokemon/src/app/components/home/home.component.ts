import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {
   pokemons:any[]  = [];
   allPokemons:any[] = []
  constructor(private PokemonService : PokemonServiceService) {
    this.getAllPokemons();
    
  }

getAllPokemons() {
  this.PokemonService.getAllPokemons().subscribe((data) => {
    this.allPokemons = data;

    this.allPokemons.forEach(pokemon => {
      this.PokemonService.getPokemonByName(pokemon.name).subscribe((details) => {
        this.pokemons.push(details);
      });
    });
  });
}


  }

  


