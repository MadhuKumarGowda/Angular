import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css',
})
export class NgforComponent {
  cityList: string[] = ['Mysore', 'Bangalore', 'Mandya', 'Kolar'];
  employeeList: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'madhu', age: 30 },
    { id: 2, name: 'maddy', age: 33 },
    { id: 3, name: 'mike', age: 36 },
  ];
}
