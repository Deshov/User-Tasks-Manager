import { Component,computed, input, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  user = input.required<User >();
  selected = input.required<boolean >();
  selectedUserId=output<string>();
 
  imagePath = computed(() => 'assets/users/' + this.user()?.avatar); 
 
  onUserClick() {
    this.selectedUserId.emit(this.user().id);
  }
}
