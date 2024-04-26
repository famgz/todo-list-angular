import { Task } from './models/tasks.mode';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';
  receivedChore: any;
  static nextId = 1;
  tasks: Task[] = [
    {
      id: 0,
      title: 'Voar',
      category: 'Desejo',
      completed: false,
      createdAt: new Date(),
      dueHour: new Date(),
    },
  ];

  chore(event: any): void {
    this.receivedChore = event;
    this.tasks.push({
      id: AppComponent.nextId++,
      title: this.receivedChore.value.title,
      category: this.receivedChore.value.category,
      completed: false,
      createdAt: new Date(),
      dueHour: this.receivedChore.value.dueHour,
    });
  }
}
