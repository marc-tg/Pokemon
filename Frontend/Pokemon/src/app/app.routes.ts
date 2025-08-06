import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: "pokemon-view", component:PokemonViewComponent}
    
];


