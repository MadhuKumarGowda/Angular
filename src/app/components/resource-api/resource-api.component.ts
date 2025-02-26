import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css',
})
export class ResourceApiComponent {
  todoId = signal<number>(0);

  userList = resource({
    request: () => ({ id: this.todoId() }),
    loader: ({ request, abortSignal }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${request.id}/todos`, {
        signal: abortSignal,
      }).then((res) => res.json() as Promise<any[]>),
  });

  selectedTodoId = (event: Event): void => {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.todoId.set(parseInt(selectedValue));
    // below method is to reload the API data
    //this.userList.reload()
  };
}
