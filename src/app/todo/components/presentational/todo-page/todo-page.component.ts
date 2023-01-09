import { Component, OnInit } from '@angular/core';
import { Item } from "../../../item";
import { ItemsService } from "../../../items.service";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit{
  public todoItems: Item[] = [];

  constructor( private itemsService: ItemsService) {
  }

  ngOnInit(){
    this.itemsService.getTodoItems<Item[]>().subscribe((items) => {
      this.todoItems = items;
      console.log(this.todoItems);
    })
  }

  public onInputChange(value: string) {
    this.createItem({title: value, isCompleted: false})
  }

  private createItem(item: Item) {
    this.itemsService.addTodoItem(item)
      .subscribe(result => {
        item.id = result.todo.id;
        console.log('item', result);
        this.todoItems.push(item);
      })
  }

  public onDeleteItem(id: number){
    console.log('id', id);
    this.itemsService.deleteTodoItem(id).subscribe(id => {
      console.log("The item with id", id, "was deleted successfully!")
    })

    this.removeTodoItem(id);
  }

  removeTodoItem(id: number) {
    this.todoItems = this.todoItems.filter((item, index, arr) => {
      return item.id !== id;
    })
  }
}
