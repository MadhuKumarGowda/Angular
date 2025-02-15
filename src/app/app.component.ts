import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalComponent } from './components/signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-sample';
}
