import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  primaryDiv: string = 'text-xl text-bold text-purple-800';
  secondaryDiv: string = 'text-lg text-semibold text-green-600';
  dynamicFontColor: string = 'text-blue-500';
  dynamicText: string = 'Danger';
  isTermAgreed: boolean = false;
  termAgreedText: string = 'Please accepts the Terms';

  // checkbox changed event
  toggleText = (): void => {
    this.isTermAgreed == true
      ? (this.termAgreedText = 'Terms are accepted')
      : (this.termAgreedText = 'Please accepts the Terms');
  };

  // text color change based on button click event
  toggleTextColor = (): void => {
    if (this.dynamicText === 'Danger') {
      this.dynamicText = 'Primary';
      this.dynamicFontColor = 'text-red-500 text-xl';
    } else {
      this.dynamicText = 'Danger';
      this.dynamicFontColor = 'text-blue-500 text-xl';
    }
  };
}
