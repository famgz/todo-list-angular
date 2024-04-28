import { CreateTask, Task } from '../models/tasks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apikey = '3d7cc799862f4940940552667a0d6b63';
  apiUrl = `https://crudcrud.com/api/${this.apikey}/tasks`;

  private tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  listTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(newTask: CreateTask) {
    return this.http.post<Task>(`${this.apiUrl}`, newTask);
  }

  updateTask(newTask: Task) {
    console.log(`${this.apiUrl}/${newTask._id}`)
    return this.http.put<Task>(`${this.apiUrl}/${newTask._id}`, newTask);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(first()).subscribe({
      complete:() => {
        this.listTasks()
      },
      error:(err) => {
       console.log(err)
      },
    });
  }
}
