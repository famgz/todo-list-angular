import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTask, Task } from '../models/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // apikey = '995bd881c11b4f74ba6bced6001bf7f7';
  // apiUrl = `https://crudcrud.com/api/${this.apikey}/tasks`;
  // apiUrl = 'http://localhost:5000/tasks';
  apiUrl = 'https://famgz-tasks-api.vercel.app/tasks';

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

  updateTask(id: string, newTask: Task) {
    const { _id, ...rest } = newTask;
    return this.http.put<Task>(`${this.apiUrl}/${id}`, rest);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
