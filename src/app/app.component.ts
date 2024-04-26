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
  tasks: Task[] = [];

  constructor(taskService: TaskService, taskHandler: TaskHandlerService) {
     taskService.mockDados();
     this.tasks = taskService.listTasks();

    taskService.deleteTask(2);
    this.tasks = taskService.listTasks();

    //Crud Crud
   taskHandler.addTask({id: 1, title: 'Tarefa1 ', category: 'Esportes', completed: false, createdAt: new Date(),dueHour: new Date()});

    taskHandler.listTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(`\nTarefas encontradas na API: ${JSON.stringify(this.tasks)}\n`);
    });

  //  taskHandler.deleteTask("662ae25e12b33803e8015e5f");
  //   this.tasks.forEach(item => taskHandler.deleteTask(item.id));
  //   this.tasks = taskHandler.listTasks();
  }

}
