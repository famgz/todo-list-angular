import { CreateTask, Task } from '../models/tasks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apikey = '472dbd3a61b349bcb9729381c7b69cb0';
  apiUrl = `https://crudcrud.com/api/${this.apikey}/tasks`;

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
    const taskId = newTask._id;
    delete newTask._id;
    return this.http.put<Task>(`${this.apiUrl}/${taskId}`, newTask);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
