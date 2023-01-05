import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Items } from "./items";

@Injectable({
  providedIn: "root"
})

export class ItemsService {
  url = "http://localhost:4000/items";
  items: Items[] = [];

  constructor(private http: HttpClient) {
  }

  getTodoItems() {
    return this.http.get(`${this.url}`);
  }
}

