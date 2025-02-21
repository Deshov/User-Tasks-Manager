import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header/header.component";
import { UserComponent } from "./user/user/user.component";
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);

  onSelectUser(id:string){
    console.log('User selected:', id);
  }
}
