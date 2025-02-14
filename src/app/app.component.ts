import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, LoginComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular19-sample';
}
