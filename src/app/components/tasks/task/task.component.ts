import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  private taskService = inject(TaskService);

  task = input.required<Task>();

  onCompleteTask() {    
    this.taskService.completeTask(this.task().id);
  }
}
