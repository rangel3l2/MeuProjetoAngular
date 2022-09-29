import { Component, OnInit, Input, Inject } from '@angular/core';
import { Hero } from 'src/app/hero';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroesComponent } from '../heroes.component';

@Component({
  selector: 'app-dialog-status',
  templateUrl: './dialog-status.component.html',
  styleUrls: ['./dialog-status.component.css']
})
export class DialogStatusComponent implements OnInit {
  
 
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {selectedHero: Hero}) { }

  ngOnInit(): void {
  }



  
}
