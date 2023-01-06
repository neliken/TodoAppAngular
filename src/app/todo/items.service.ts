import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./item";

@Injectable({
  providedIn: "root"
})

export class ItemsService {
  url = "http://localhost:4000/";
  items: Item[] = [];

  constructor(private http: HttpClient) {
  }

  getTodoItems() {
    return this.http.get(`${this.url}`+ `items`);
  }

  addTodoItem(item: any) {
    console.log(item)
    return this.http.post(`${this.url}`+ `addItem`, item);
  }
}
