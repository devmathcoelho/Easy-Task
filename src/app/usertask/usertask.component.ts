import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-usertask',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './usertask.component.html',
  styleUrl: './usertask.component.css'
})
export class UsertaskComponent {
  @Input({required: true}) userId: string | undefined;
  @Input({required: true}) name: string | undefined;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      date: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      date: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      date: '2024-06-15',
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}