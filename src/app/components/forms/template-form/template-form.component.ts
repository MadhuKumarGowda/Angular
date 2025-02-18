import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  city: string;
  state: string;
  zipCode: number;
}
@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userObj: IUser = {
    firstName: '',
    lastName: '',
    password: '',
    city: '',
    state: '',
    zipCode: 0,
  };

  onSave = (): void => {
    console.log(this.userObj);
  };
}
