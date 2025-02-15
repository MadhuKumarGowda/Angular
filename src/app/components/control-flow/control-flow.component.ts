import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ICity {
  id: number;
  name: string;
  population: number;
  isMetro: boolean;
}
@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  isBtnClicked: boolean = false;
  isChecked: boolean = false;
  cityList: ICity[] = [
    { id: 1, name: 'Mysore', population: 20000, isMetro: false },
    { id: 2, name: 'Managlore', population: 25000, isMetro: false },
    { id: 3, name: 'Bangalore', population: 120000, isMetro: true },
    { id: 4, name: 'Puttur', population: 1000, isMetro: false },
  ];

  setVisibleStatus = (action: boolean): void => {
    this.isBtnClicked = action;
  };
}
