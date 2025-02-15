import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { NgifComponent } from './components/directives/ngif/ngif.component';
import { NgClassComponent } from './components/directives/ng-class/ng-class.component';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgforComponent,
    NgifComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-sample';
}
