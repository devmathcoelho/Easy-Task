import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  
  public get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  public get namePath() {
    return this.name
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
  
}
