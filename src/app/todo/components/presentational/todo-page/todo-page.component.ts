import { Component, OnInit } from '@angular/core';
import { Item } from "../../../item";
import { ItemsService } from "../../../items.service";
import { FilterType } from "../../../FilterType";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})

export class TodoPageComponent implements OnInit{
  public allTodoItems: Item[] = [];
  public filteredTodoItems: Item[] = [];

  constructor( private itemsService: ItemsService) {
  }

  ngOnInit(){
    this.itemsService.getTodoItems<Item[]>().subscribe((items) => {
      this.allTodoItems = items;
      this.filteredTodoItems = this.allTodoItems;
    })
  }

  public onInputChange(value: string) {
    this.createItem({title: value, isCompleted: false})
  }

  private createItem(item: Item) {
    this.itemsService.addTodoItem(item)
      .subscribe(result => {
        item.id = result.todo.id;
        this.allTodoItems.push(item);
        // console.log(this.allTodoItems, this.filteredTodoItems)
        // this.filteredTodoItems = this.allTodoItems;
      })
  }

  public onDeleteItem(id: number){
    this.itemsService.deleteTodoItem(id).subscribe();

    this.removeTodoItem(id);
  }

  public onChangedItem(item: Item){
    const foundItem = this.allTodoItems.find(it => it.id === item.id);

    if (foundItem != null) {
      foundItem.isCompleted = !item.isCompleted;
    }

    this.itemsService.updateTodoItem(item).subscribe();
  }

  public onDeleteItems(){
    this.itemsService.deleteCompletedItems().subscribe();
    this.filteredTodoItems = this.filterTodoItems(false);
    this.allTodoItems =  this.filteredTodoItems;
  }

  public onFilterChange(action: FilterType) {
    if (action === FilterType.All) {
      this.filteredTodoItems = this.allTodoItems;
    } else if (action === FilterType.Active) {
      this.filteredTodoItems = this.filterTodoItems(false);
    } else if (action === FilterType.Completed) {
      this.filteredTodoItems = this.filterTodoItems(true);
    }
  }

  filterTodoItems(condition: boolean) {
    return this.allTodoItems.filter((item, index, arr) => {
      return item.isCompleted === condition;
    })
  }

  nrOfItem = () => {
    let count: number = 0;

    this.allTodoItems.forEach((item) => {
      if(!item.isCompleted) {
        count++;
      }
    })

    return count;
  }

  removeTodoItem(id: number) {
    this.allTodoItems = this.allTodoItems.filter((item) => {
      return item.id !== id;
    })
    this.filteredTodoItems = this.allTodoItems;
  }
}
