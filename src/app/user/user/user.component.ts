import { Component,computed, input, output } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User >();
  selectedUserId=output<string>();
 
  imagePath = computed(() => 'assets/users/' + this.user()?.avatar); 
 
  onUserClick() {
    this.selectedUserId.emit(this.user().id);
  }
}
