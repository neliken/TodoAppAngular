import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { ItemsService } from "../../../items.service";

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent {
  @Output("onInputChange")
  onInputChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("input") inputVar: any;

  constructor(private itemsService: ItemsService) {
  }

  async getInput(event: any) {
    let { value } = event.target;

    this.onInputChange.emit(value);
    this.resetInput();
  }

  resetInput() {
    this.inputVar.nativeElement.value = "";
  }
}
