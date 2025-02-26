import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

interface ITopics {
  path: string;
  name: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-concepts';
  topicList: ITopics[] = [
    { path: 'databinding', name: 'DataBinding' },
    { path: 'ngIf', name: 'Directives-ngIf' },
    { path: 'ngFor', name: 'Directives-ngFor' },
    { path: 'ngClass', name: 'Directives-ngClass' },
    { path: 'ngStyle', name: 'Directives-ngStyle' },
    { path: 'controlFlow', name: 'ControlFlow' },
    { path: 'Signal', name: 'Signal' },
    { path: 'LinkedSignal', name: 'Linked Signal' },
    { path: 'TemplateForm', name: 'Template Form' },
    { path: 'ReactiveForm', name: 'Reactive Form' },
    { path: 'APIIntegration', name: 'API Integration' },
  ];

  constructor(private router: Router) {}

  navigate = (event: Event): void => {
    const selectedPath = (event.target as HTMLSelectElement).value;
    this.router.navigate([selectedPath]);
  };
}
