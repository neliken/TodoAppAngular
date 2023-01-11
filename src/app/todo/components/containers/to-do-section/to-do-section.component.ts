import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../item";

@Component({
  selector: 'app-to-do-section',
  templateUrl: './to-do-section.component.html',
  styleUrls: ['./to-do-section.component.css']
})
export class ToDoSectionComponent {
  @Input() filteredTodoItems: Item[] = [];

  @Output("onDeleteItem")
  onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  @Output("onChangedItem")
  onChangedItem: EventEmitter<Item> = new EventEmitter<Item>();

  getIdItem(id: number = 0) {
    this.onDeleteItem.emit(id);
  }

  toggleCheckbox(item: Item) {
    this.onChangedItem.emit(item);
  }
}
