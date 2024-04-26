import { Task } from '../models/tasks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskHandlerService {
  
  apiUrl = 'https://crudcrud.com/api/22e20051b0854265a283b1f5efd5a9b5';
  apiUrlTarefas = `${this.apiUrl}/tasks`;

  private tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  listTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrlTarefas}`)
      .pipe(
        map(data => {
          this.tasks = data;
          return this.tasks; 
        })
      );
  }

  getTask(title: string): Task | null {
    const task = this.tasks.find(t => t.title === title);
    return task || null;
  }

  addTask(newTask: Task): void {
      this.http
      .post<Task>(`${this.apiUrlTarefas}`, newTask)
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(`Tarefa adicionada com sucesso response\n`)
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}