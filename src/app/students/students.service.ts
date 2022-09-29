import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Aluno } from '../aluno';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  alunos: Aluno[] = [
    {id: 1, nome: 'Pedro',idade: 15,nota1:8.4,nota2:3.9,nota3:8.5,nota4:10.0},
    {id: 2, nome: 'Bruno',idade:14,nota1:7.0,nota2:5.5,nota3:5.5,nota4:8.0},
    {id: 3, nome: 'Carlos',idade:14,nota1:7.0,nota2:8.5,nota3:6.5,nota4:6.7},
    {id: 4, nome: 'Renan',idade: 15,nota1:8.0,nota2:6.0,nota3:7.0,nota4:6.7},
    {id: 5, nome: 'Augusto',idade: 16,nota1:8.4,nota2:3.8,nota3:7.7,nota4:4.4},
    {id: 6, nome: 'Kleber',idade: 16,nota1:5.5,nota2:9.6,nota3:6.4,nota4:4.4},
    {id: 7, nome: 'Valéria',idade: 15,nota1:10.0,nota2:4.3,nota3:5.5,nota4:8.0},
    {id: 8, nome: 'Augusto',idade: 16,nota1:8.5,nota2:2.7,nota3:6.0,nota4:6.4},
    {id: 9, nome: 'Rafael',idade: 15,nota1:9.5,nota2:6.6,nota3:1.0,nota4:5.5},
    {id: 10, nome: 'Igor',idade: 15,nota1:4.5,nota2:7.7,nota3:4.4,nota4:6.0},
    {id: 11, nome: 'Gabriel',idade:12,nota1:3.2,nota2:6.7,nota3:7.6,nota4:5.5},
    {id: 12, nome: 'Vinicius',idade:15,nota1:1.0,nota2:4.6,nota3:8.4,nota4:7.6},
    {id: 13, nome: 'Karla',idade: 16,nota1:5.7,nota2:3.9,nota3:4.4,nota4:4.5},
    {id: 14, nome: 'Bruna',idade:15,nota1:4.4,nota2:8.0,nota3:4.5,nota4:4.5},
    {id: 15, nome: 'Luana',idade:15,nota1:8.3,nota2:7.0,nota3:5.5,nota4:3.0},
    {id: 16, nome: 'Vanessa',idade:15,nota1:10.0,nota2:7.5,nota3:6.6,nota4:8.0},
    {id: 17, nome: 'Sabrina',idade:16,nota1:2.4,nota2:5.5,nota3:6.8,nota4:6.4},
    {id: 18, nome: 'Aline',idade:14,nota1:6.7,nota2:5.5,nota3:9.8,nota4:3.5},
    {id: 19, nome: 'Alisson ',idade:15,nota1:5.7,nota2:5.2,nota3:5.8,nota4:0},
  ]

  constructor() { }
  getStudents() : Aluno[] {
    return this.alunos;
  }
  calMedia(): Aluno[] {
  
    this.alunos.map((item)=>{
        item.media = (item.nota1+item.nota2+item.nota3+item.nota4)/4
      
    })
    return this.alunos

  }
  calStatus(): Aluno[]{
    this.alunos.map((item)=>{
      const status = ((item.nota1 + item.nota2 + item.nota3  + item.nota4)/4)>6?true:false
      item.status = status

    })
    
    return this.alunos

  }

}
