import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './usertask.service';
import { type newTask } from './tasks/task.model';

@Component({
  selector: 'app-usertask',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './usertask.component.html',
  styleUrl: './usertask.component.css'
})
export class UsertaskComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService){
    
  }

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTask(){
    this.isAddingTask = true;
  }

  onClose(){
    this.isAddingTask = false;
  }
}