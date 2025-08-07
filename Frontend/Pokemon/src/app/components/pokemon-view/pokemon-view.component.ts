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

  constructor(private router: Router, private route: ActivatedRoute , private pokemonService: PokemonServiceService) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const pokemonName = params['name'];

      if (pokemonName) {
        this.pokemonService.getPokemonByName(pokemonName).subscribe(pokemon => {
          this.pokemon = pokemon;
        });

        console.log("Pokemon" + this.pokemon);
      } else {
        this.pokemon = null;
      }

    })

  }



    goHome() {
      this.router.navigate(['/']);
    }

}
