import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // data binding
  firstName: string = 'Madhu Kumar K S';
  age: number = 12344;
  isActive: boolean = true;
  createdDate: Date = new Date();
  selectedCity: string = '';

  constructor() {}

  showMessage = (): void => {
    alert('Welcome to Angular 19 ');
  };

  cityChangedEvent = (): void => {
    console.log('city changed');
  };
}
