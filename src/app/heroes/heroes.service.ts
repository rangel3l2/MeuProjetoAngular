import { Injectable } from '@angular/core';
import { Hero } from '../hero';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Hero[] = [
    {id : 1, name: 'thor'},
    {id : 2, name: 'Homem de ferro'},
    {id : 3, name: 'homem aranha'},
    {id : 4, name: 'Pequena Sereia'},
    {id : 5, name: 'Super man'}

];  


  constructor() { 
    
    }
    getHeroes(): Hero[] {
      return this.heroes;
  

}
}
