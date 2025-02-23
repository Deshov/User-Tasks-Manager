import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  completedTask = output<string|undefined>();
  
  task = input<Task>();

  onCompleteTask() {
    this.completedTask.emit(this.task()?.id);
  }
}
