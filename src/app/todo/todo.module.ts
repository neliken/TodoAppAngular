import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HeaderComponent } from './header/header.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';



@NgModule({
  declarations: [
    NewToDoComponent,
    ToDoListComponent,
    HeaderComponent,
    ToDoContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
