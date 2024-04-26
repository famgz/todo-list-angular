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

}