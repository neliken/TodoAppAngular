import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})

export class NewToDoComponent {
  @Output("onInputChange")
  onInputChange: EventEmitter<string> = new EventEmitter<string>();
  inputTodoItem = new FormControl('');

  async getInput(event: any) {
    let { value } = event.target;
    if(this.inputTodoItem.value !== '') {
      this.onInputChange.emit(value);
      this.inputTodoItem.reset("");
    }
  }
}
