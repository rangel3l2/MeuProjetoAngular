import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { StudentsService } from './students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private media = []
  private status = []
  dataSource : Aluno[] = [] 
 
  constructor(private studentsService : StudentsService ) { }
  ngOnInit(): void {
      this.getStudents()
  }
  displayedColumns: string[] = ['id','nome', 'idade', 'nota1', 'nota2','nota3','nota4','media'];
  
  getStudents() : void{
    this.dataSource = [...this.studentsService.getStudents()]
    
  }
  



  

 
  clickedStudent?:Aluno 
  showModalPopUp : boolean = false;
  showStatusPopUp = (student: Aluno):void => {
    this.showModalPopUp = true;  
    
    this.clickedStudent = student;
    console.log(student)
  
 }

}
