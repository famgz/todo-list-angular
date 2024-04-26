import { Task } from '../models/tasks.model';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasks: Task[] = [];

  constructor() {}

  listTasks(): Task[] {
    console.log(this.tasks);
    return this.tasks;
  }

  getTask(title: string): Task | null {
    const task = this.tasks.find(t => t.title === title);
    return task || null;
  }

  deleteTask(id: number): boolean {
    console.log("Apagando task id " + id);
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      console.log("Registro " + id + " deletado");
      return true;
    } else {
      return false;
    }
  }

  addTask(newTask: Task): void {
    console.log("Adicionando tarefa id " + newTask.id );
    this.tasks.push(newTask);
    console.log("Tarefa adicionada " + newTask.title );
  }

  mockDados(){
    this.addTask({id: 1, title: 'Tarefa1 ', category: 'Esportes', completed: false, createdAt: new Date(),dueHour: new Date()});
    this.addTask({id: 2, title: 'Tarefa2 ', category: 'Lazer', completed: false, createdAt: new Date(),dueHour: new Date()}); 
    this.addTask({id: 3, title: 'Tarefa3 ', category: 'Acadêmica', completed: false, createdAt: new Date(),dueHour: new Date()});
    this.addTask({id: 4, title: 'Tarefa4 ', category: 'Trabalho', completed: false, createdAt: new Date(),dueHour: new Date()});
    this.addTask({id: 5, title: 'Tarefa5 ', category: 'Descanso', completed: false, createdAt: new Date(),dueHour: new Date()});
  }
}
