import { Component } from '@angular/core';
import { ItemsService } from "../../../items.service";

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent {
  title: string = '';

  constructor(private itemsService: ItemsService) {
  }
  getInput(event: any) {
    this.title = event.target.value;
    let value = event.target.value;
    event.target.value = '';
    this.itemsService.addTodoItem({title: value})
  }
}
