import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aluno } from 'src/app/aluno';
@Component({
  selector: 'app-dialog-status',
  templateUrl: './dialog-status.component.html',
  styleUrls: ['./dialog-status.component.css']
})
export class DialogStatusComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: {clickedStudent: Aluno}) { }

  ngOnInit(): void {
  }
  

}
