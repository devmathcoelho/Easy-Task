import { Component, inject, Input } from '@angular/core';
import { type tasks} from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../usertask.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) task!: tasks;
  private taskService = inject(TaskService);

  onComplete(){
    this.taskService.removeTask(this.task.id);
  }

}
