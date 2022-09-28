import { Component, OnInit  } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
  heroes: Hero[] = []
  constructor(private heroesService : HeroesService) {}
  ngOnInit(): void {
    this.getHeroes()
  } 
  getHeroes() : void {
    this.heroes = [...this.heroesService.getHeroes()]
  }
  hero: Hero = {
    id: 1,
    name: 'Thor'
  };
  selectedHero?: Hero

 

selectHero(hero : Hero):void{
this.selectedHero = hero

}


 

  

}