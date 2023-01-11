import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./item";

@Injectable({
  providedIn: "root"
})

export class ItemsService {
  url = "http://localhost:4000/todo";

  constructor(private http: HttpClient) {
  }

  getTodoItems<T>() {
    return this.http.get<T>(`${this.url}`);
  }

  addTodoItem(item: Item) {
    return this.http.post<{ todo: Item }>(`${this.url}`, item, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  updateTodoItem(item: Item) {
    return this.http.put(`${this.url}/${item.id}`, item);
  }

  deleteTodoItem(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  deleteCompletedItems() {
    return this.http.delete(`${this.url}`);
  }
}
