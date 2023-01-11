import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FilterType } from "../../../FilterType";


@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent {
  @Input() nrOfItems: number = 0;
  @Output() onFilterChange: EventEmitter<FilterType> = new EventEmitter<FilterType>();
  @Output() onDeleteItems: EventEmitter<unknown> = new EventEmitter();

  public FilterType: Record<keyof typeof FilterType, number> = {
    Active: FilterType.Active,
    All: FilterType.All,
    Completed: FilterType.Completed
  }

  public currentFilterAction: FilterType = FilterType.All;

  onFilter(action: FilterType){
    this.onFilterChange.emit(action);
    this.currentFilterAction = action;
  }

  onClearAll() {
    this.onDeleteItems.emit();
  }
}
