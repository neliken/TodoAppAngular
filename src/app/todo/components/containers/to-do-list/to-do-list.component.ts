import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../item";
import { FilterType } from "../../../FilterType";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() filteredTodoItems: Item[] = [];
  @Input() nrOfItems: number = 0;
  @Output("onDeleteItem")
  onDeleteItem: EventEmitter<number> = new EventEmitter<number>();
  @Output("onDeleteItems")
  onDeleteItems: EventEmitter<unknown> = new EventEmitter();

  @Output("onChangedItem")
  onChangedItem: EventEmitter<Item> = new EventEmitter<Item>();

  @Output("onFilterChange")
  onFilterChange: EventEmitter<FilterType> = new EventEmitter();

  public deleteItem(id: number) {
    this.onDeleteItem.emit(id)
  }

  public changedItem(item: Item) {
    this.onChangedItem.emit(item)
  }

  public onFilter(action: FilterType) {
    this.onFilterChange.emit(action);
  }

  public deleteItems() {
    this.onDeleteItems.emit()
  }
}
