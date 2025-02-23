import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "./dummy-tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from "./task/task.model";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 name = input<string >();
 userid = input<string >();
 showNewTask = false
 tasks = DUMMY_TASKS;

 get userTasks() {
   return this.tasks.filter(task => task.userId === this.userid());
 }
 completeTask(taskId?: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
 }

 showNewTaskDialog() {
   this.showNewTask = true;
 }

 closeTaskDialog() {
   this.showNewTask = false;
 }

 addTask(task: Task) {
   this.tasks = [...this.tasks, task];
   this.showNewTask = false;
 }
}
