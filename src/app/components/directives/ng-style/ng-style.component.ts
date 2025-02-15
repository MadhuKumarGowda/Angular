import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  selectedColor: string = '';
  isChecked: boolean = false;

  addColor = (color: string): void => {
    this.selectedColor = color;
  };
}
