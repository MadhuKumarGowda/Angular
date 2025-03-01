import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-eventemitter',
  imports: [ProgressBarComponent, ButtonsComponent],
  templateUrl: './eventemitter.component.html',
  styleUrl: './eventemitter.component.css',
})
export class EventemitterComponent {
  btnText: string = 'Reusable Button';
}
