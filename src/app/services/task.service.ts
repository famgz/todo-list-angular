import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTask, Task } from '../models/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apikey = '8da05b6106d34e7086858d35b0a8272e';
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
