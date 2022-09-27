import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inserir hero ';
  title2 =  'outro titulo ';

  a = 10;
  b = 20;

  printTitle ():string{
    return this.title;

  }
  ngOnInit(): void {
      
  }

}
