import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-sample';
}
