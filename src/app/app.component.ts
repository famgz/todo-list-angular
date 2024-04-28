import { Task } from './models/tasks.model';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-list-angular';
  receivedChore: any;
  static nextId = 1;
  tasks: Task[] = [];
  taskService: TaskService;

  ngOnInit(): void {
    this.listarTarefa();
  }
  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.listarTarefa();
  }

  addTarefa(event: any): void {
    this.receivedChore = event;
    this.taskService
      .addTask({
        id: AppComponent.nextId++,
        title: this.receivedChore.value.title,
        category: this.receivedChore.value.category,
        completed: false,
        createdAt: new Date(),
        dueHour: this.receivedChore.value.dueHour,
      })
      .pipe(first())
      .subscribe({
        next: (response: Task) => {
          this.taskService.listTasks().subscribe;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
  listarTarefa() {
    this.taskService.listTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(
        `\nTarefas encontradas na API: ${JSON.stringify(this.tasks)}\n`
      );
    });
  }
}
