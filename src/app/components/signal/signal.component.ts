import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // disable the auto change detection
})
export class SignalComponent {
  // creating a signal
  // signal without datatype
  firstName = signal('Madhu');
  // signal with datatype
  age = signal<number>(39);
  courseName: string = 'Angular';
  counter = signal<number>(0);

  constructor() {
    setTimeout(() => {
      this.firstName.set('Madhu Kumar K S');
      this.courseName = 'Advance Angular';
    }, 2000);
  }

  incrementCounter = (): void => {
    this.counter.update((old_valve: number) => old_valve + 1);
  };
}
