import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "./dummy-tasks";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 name = input<string >();
 userid = input<string >();

 tasks = DUMMY_TASKS;

 get userTasks() {
   return this.tasks.filter(task => task.userId === this.userid());
 }
 completeTask(taskId?: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
 }
}
