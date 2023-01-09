import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../item";

@Component({
  selector: 'app-to-do-section',
  templateUrl: './to-do-section.component.html',
  styleUrls: ['./to-do-section.component.css']
})
export class ToDoSectionComponent {
  @Input() todoItems: Item[] = [];

  @Output("onDeleteItem")
  onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  getIdItem(id: number = 0) {
    this.onDeleteItem.emit(id);
  }
  toggleCheckbox(isCompleted: any) {
    console.log(isCompleted)
    console.log(this.todoItems)
  }
}
