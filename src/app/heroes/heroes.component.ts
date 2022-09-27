import { Component, OnInit  } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
  constructor() { }
  ngOnInit(): void {
      
  }
  hero: Hero = {
    id: 1,
    name: 'Thor'
  };
  selectedHero?: Hero

  heroes: Hero[] = [
    {id : 1, name: 'thor'},
    {id : 2, name: 'Homem de ferro'},
    {id : 3, name: 'homem aranha'},
    {id : 4, name: 'Pequena Sereia'},
    {id : 5, name: 'Super man'}

];  
selectHero(hero : Hero):void{
this.selectedHero = hero

}


 

  

}