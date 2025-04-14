import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type tasks} from './task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) task!: tasks;
  @Output() complete = new EventEmitter<string>();

  onComplete(){
    this.complete.emit(this.task.id);
  }

}
