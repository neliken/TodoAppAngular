import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./item";

@Injectable({
  providedIn: "root"
})

export class ItemsService {
  url = "http://localhost:4000";
  items: Item[] = [];

  constructor(private http: HttpClient) {
  }

  getTodoItems<T>() {
    return this.http.get<T>(`${this.url}/items`);
  }

  addTodoItem(item: Item) {
    return this.http.post<{ todo: Item }>(`${this.url}/todo`, item, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  deleteTodoItem(id: number) {
    return this.http.delete(`${this.url}/todo/${id}`);
  }
}
