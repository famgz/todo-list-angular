import { Task } from './models/tasks.model';
import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { TaskHandlerService } from './services/task-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';
  receivedChore: any;
  static nextId = 1;
  tasks: Task[] = [ ];
  taskService: TaskService = new TaskService();
  

  constructor(taskService: TaskService, taskHandler: TaskHandlerService) {
    this.taskService = taskService;
  }

  chore(event: any): void {
    this.receivedChore = event;
    this.taskService.addTask({
      id: AppComponent.nextId++,
      title: this.receivedChore.value.title,
      category: this.receivedChore.value.category,
      completed: false,
      createdAt: new Date(),
      dueHour: this.receivedChore.value.dueHour,
    });

    this.tasks = this.taskService.listTasks();

  }

  



}