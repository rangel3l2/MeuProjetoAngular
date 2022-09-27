import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MatTableModule } from '@angular/material/table';
import { StudentsComponent } from './students/students.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,  
    HeroesComponent, StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule 
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
