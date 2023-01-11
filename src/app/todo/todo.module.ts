import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewToDoComponent} from "./components/containers/new-to-do/new-to-do.component";
import {ToDoListComponent} from "./components/containers/to-do-list/to-do-list.component";
import {HeaderComponent} from "./components/presentational/header/header.component";
import {ToDoContainerComponent} from "./components/containers/to-do-container/to-do-container.component";
import {RouterModule} from "@angular/router";
import {CheckboxComponent} from "./components/presentational/checkbox/checkbox.component";
import {ToDoSectionComponent} from './components/containers/to-do-section/to-do-section.component';
import {routes} from "./routes";
import { TodosFooterComponent } from './components/presentational/todos-footer/todos-footer.component';
import { TodoPageComponent } from './components/presentational/todo-page/todo-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    NewToDoComponent,
    ToDoListComponent,
    HeaderComponent,
    ToDoContainerComponent,
    CheckboxComponent,
    ToDoSectionComponent,
    TodosFooterComponent,
    TodoPageComponent,
  ],
  exports: [
    ToDoContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ScrollingModule,
    MatCardModule,
    DragDropModule
  ]
})
export class TodoModule {
}
