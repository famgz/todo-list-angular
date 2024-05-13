import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { CreateTask, Task } from './models/tasks.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-list-angular';
  receivedChore: any;
  nextId = '';
  tasks: Task[] = [];
  taskService: TaskService;

  ngOnInit(): void {
    this.listarTarefa();
  }
  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.listarTarefa();
  }

  getUserById(id: string): void {
    this.taskService.getTask(id).subscribe({
      next: (response: CreateTask) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addTarefa(event: any): void {
    this.receivedChore = event;
    this.taskService
      .addTask({
        title: this.receivedChore.value.title,
        category: this.receivedChore.value.category,
        completed: false,
        dueHour: this.receivedChore.value.dueHour,
      })
      .pipe(first())
      .subscribe({
        next: (response: any) => {
          this.listarTarefa();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  editTarefa(event: any, id: string): void {
    this.receivedChore = event;
    console.log({ event });
    this.taskService
      .updateTask(id, {
        title: this.receivedChore.value.title,
        category: this.receivedChore.value.category,
        completed: false,
        // createdAt: new Date(),
        dueHour: this.receivedChore.value.dueHour,
      })
      .pipe(first())
      .subscribe({
        next: (response: Task) => {
          this.listarTarefa();
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.receivedChore.reset();
        },
      });
  }

  deletarTarefa(event: any, id: string): void {
    this.taskService.deleteTask(id).subscribe({
      next: (response) => console.log(response),
      complete: () => {
        this.listarTarefa();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  id(id: string): void {
    this.nextId = id;
    console.log(this.nextId);
  }

  listarTarefa() {
    this.taskService
      .listTasks()
      .pipe()
      .subscribe((tasks) => {
        this.tasks = tasks;
        console.log(
          `\nTarefas encontradas na API: ${JSON.stringify(this.tasks)}\n`
        );
      });
  }
}
