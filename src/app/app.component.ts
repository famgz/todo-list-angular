import { Task } from './models/tasks.mode';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Tarefa1 ',
      category: 'Esportes',
      completed: true,
      createdAt: new Date(),
      dueHour: new Date(),
    },
    {
      id: 2,
      title: 'Tarefa2 ',
      category: 'Esportes',
      completed: false,
      createdAt: new Date(),
      dueHour: new Date(),
    },
  ];
}
