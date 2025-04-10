import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usertask',
  standalone: true,
  imports: [],
  templateUrl: './usertask.component.html',
  styleUrl: './usertask.component.css'
})
export class UsertaskComponent {
  @Input() name: string | undefined;
}