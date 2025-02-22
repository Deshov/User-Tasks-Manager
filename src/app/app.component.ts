import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from "./header/header/header.component";
import { UserComponent } from "./user/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId: string | null = null;

  getUserData = computed(()=>
     this.users.find(user=>user.id === this.selectedUserId)
  );

  get userData(){
    return  this.users.find(user=>user.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
