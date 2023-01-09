import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../item";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() todoItems: Item[] = [];
  @Output("onDeleteItem")
  onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  public deleteItem(id: number) {
    this.onDeleteItem.emit(id)
  }
}
