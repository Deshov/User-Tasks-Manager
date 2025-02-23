import { Component,input,output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  close = output<void>();
  newTask = output<Task>();
  userid = input.required<string>();
  enteredTItle= signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCloseDialog() {
    this.close.emit();
  }
  onCreateTask() {
    this.newTask.emit(
      {
        id: new Date().getTime().toString(), 
        title: this.enteredTItle(), 
        summary: this.enteredSummary(), 
        dueDate: this.enteredDate(), 
        userId: this.userid()
      }
    );
  }
}
