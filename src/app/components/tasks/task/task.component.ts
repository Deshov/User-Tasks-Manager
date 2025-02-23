import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
