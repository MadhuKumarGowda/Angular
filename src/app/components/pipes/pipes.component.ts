import { DatePipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NAPipesPipe } from '../../pipes/napipes.pipe';

interface ICity {
  id: number;
  name: string;
  population: number;
  isMetro: boolean;
}

@Component({
  selector: 'app-pipes',
  imports: [TitleCasePipe, JsonPipe, DatePipe, NAPipesPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  title: string = 'angular pipes';

  todayDate: Date = new Date();

  cityList: ICity[] = [
    { id: 1, name: 'Mysore', population: 20000, isMetro: false },
    { id: 2, name: 'Managlore', population: 25000, isMetro: false },
    { id: 3, name: 'Bangalore', population: 120000, isMetro: true },
    { id: 4, name: '', population: 1000, isMetro: false },
  ];
}
