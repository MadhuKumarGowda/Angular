import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { NgifComponent } from './components/directives/ngif/ngif.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgforComponent, NgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-sample';
}
