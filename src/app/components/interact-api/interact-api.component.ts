import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface ITodo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-interact-api',
  imports: [],
  templateUrl: './interact-api.component.html',
  styleUrl: './interact-api.component.css',
})
export class InteractAPIComponent {
  toDoList: ITodo[] = [];
  crudOpsList: string[] = ['GET', 'POST', 'PUT/PATCH', 'DELETE'];
  constructor(private httpClient: HttpClient) {}

  getTodoList = (): void => {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users/1/todos')
      .subscribe((res: any) => {
        this.toDoList = res;
      });
  };

  reset = (): void => {
    this.toDoList = [];
  };
}
