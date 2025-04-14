import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() close = new EventEmitter<void>();


onCancel(){
  this.close.emit();
}

onCreate(){
  this.close.emit();
}
}
