import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../../../items.service";
// import { Items } from "../../../items";

@Component({
  selector: 'app-to-do-section',
  templateUrl: './to-do-section.component.html',
  styleUrls: ['./to-do-section.component.css']
})
export class ToDoSectionComponent implements OnInit {
  todoItems: any = [];
  constructor( private itemsService: ItemsService) {
  }

  ngOnInit(){
    this.itemsService.getTodoItems().subscribe((items) => {
      this.todoItems = items;
      console.log(this.todoItems);
    })
    // setTimeout(() => {
    //   this.todoItems.push({id: 3, title: 'hey', isCompleted:true})
    // },4000)
  }
}
