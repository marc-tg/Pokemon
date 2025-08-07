import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-view',
  imports: [CommonModule],
  templateUrl: './pokemon-view.component.html',
  styleUrl: './pokemon-view.component.css',
  standalone: true
})
export class PokemonViewComponent implements OnInit {
  pokemon: any; // o el tipo que devuelva tu servicio

  activeSprite: string = '';
  spriteList: string[] = [];
  currentSpriteIndex: number = 0;


  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonServiceService) { }
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const pokemonName = params['name'];

    if (pokemonName) {
      this.pokemonService.getPokemonByName(pokemonName).subscribe(pokemon => {
        this.pokemon = pokemon;

        // Creamos lista ordenada de sprites que queremos mostrar
        this.spriteList = [
          pokemon.sprites.front_default,
          pokemon.sprites.front_shiny,
          pokemon.sprites.back_default,
          pokemon.sprites.back_shiny
        ].filter(sprite => sprite !== null); // filtramos por si algún sprite es null

        this.currentSpriteIndex = 0;
        this.activeSprite = this.spriteList[0]; // mostramos primero front_default
      });
    } else {
      this.pokemon = null;
    }
  });
}



  goHome() {
    this.router.navigate(['/']);
  }

  changeSprites() {
    if (this.spriteList.length > 0) {
      this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.spriteList.length;
      this.activeSprite = this.spriteList[this.currentSpriteIndex];
    }
  }

}