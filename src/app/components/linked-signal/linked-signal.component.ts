import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal',
  imports: [FormsModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  firstName = signal<string>('Madhu');
  age = signal<number>(36);
  isEligibaleforVoting = linkedSignal({
    source: this.age,
    computation: (newVal, preVal) => {
      return newVal > 18 ? 'Yes' : 'No';
    },
  });

  userList = signal({
    id: 1,
    name: 'Madhu',
    age: 36,
  });

  generateAutoEmail = linkedSignal({
    source: this.userList,
    computation: (user) => `${user.id + user.name + user.age}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id,
  });
}
