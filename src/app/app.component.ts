import { Task } from './models/tasks.model';
import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo-list-angular';
  receivedChore: any;
  static nextId = 1;
  tasks: Task[] = [];
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  //Chore para Adicionar
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
  }

  //Chore para Pesquisar por id 
  //taskService.getTask(item.id.toString())

  //Chore para Deletar por id
  //taskService.deleteTask(task.id?.toString());

  //Chore para Atualizar
  //taskService.updateTask(task)








}