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
    this.taskService.listTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(
        `\nTarefas encontradas na API: ${JSON.stringify(this.tasks)}\n`
      );
    });
  }
  constructor(taskService: TaskService) {
    this.taskService = taskService;
    // taskService.deleteTask("662ae25e12b33803e8015e5f");
    //   this.tasks.forEach(item =>taskService.deleteTask(item.id));
    //   this.tasks =taskService.listTasks();
  }

  //Chore para Adicionar
  chore(event: any): void {
    this.receivedChore = event;
    console.log(event)
    };;
  }


  // handleEditChore(event: any): void {
  //   this.receivedChore = event;
  // }

  //Chore para Pesquisar por id
  //taskService.getTask(item.id.toString())

  //Chore para Deletar por id
  //taskService.deleteTask(task.id?.toString());

  //Chore para Atualizar
  //taskService.updateTask(task)

