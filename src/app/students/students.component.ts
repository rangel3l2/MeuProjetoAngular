import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { StudentsService } from './students.service'
import { MatDialog } from '@angular/material/dialog';
import { DialogStatusComponent } from './dialog-status/dialog-status.component';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
   media : Aluno[] = []
   status: Aluno[] = []
  dataSource : Aluno[] = [] 
 
  constructor(private studentsService : StudentsService,  public dialog: MatDialog ) { }
  ngOnInit(): void {
      this.getStudents()
      this.getAverage()
      this.getStatus()
  }
  displayedColumns: string[] = ['id','nome', 'idade', 'nota1', 'nota2','nota3','nota4','media'];
  
  getStudents() : void{
    this.dataSource = [...this.studentsService.getStudents()]
    
  }
  getAverage(): void {
    this.media = [...this.studentsService.calMedia()]
  }
  getStatus(): void {
    this.status = [...this.studentsService.calStatus()]
  }
  
  
  clickedStudent?:Aluno 
  showModalPopUp : boolean = false;
  showStatusPopUp = (student: Aluno):void => {
    this.showModalPopUp = true;  
    
    this.clickedStudent = student;
    
  
 }
 openDialog() {
  this.dialog.open(DialogStatusComponent, {
    data: {
      clickedStudent: this.clickedStudent,
    },
  });
} 

}
