import { Component, inject, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from "./task/task.model";
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 name = input.required<string >();
 userid = input.required<string >();
 showNewTask = false
 
 private taskService = inject(TaskService);
 

 get userTasks() {
  return this.taskService.getUserTasks(this.userid());
 }

 showNewTaskDialog() {
   this.showNewTask = true;
 }

 closeTaskDialog() {
   this.showNewTask = false;
 }

 addTask(task: Task) {
   this.taskService.addTask(task);
   this.showNewTask = false;
 }
}
