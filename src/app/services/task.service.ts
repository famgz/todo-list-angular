import { Task } from '../models/tasks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apikey = 'af0cf0953aea40abb046609ae3e6cbed';
  apiUrl = `https://crudcrud.com/api/${this.apikey}/tasks`;

  private tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  listTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(newTask: Task) {
    return this.http.post<Task>(`${this.apiUrl}`, newTask);
  }

  updateTask(newTask: Task) {
    return this.http.put<Task>(`${this.apiUrl}/${newTask.id}`, newTask);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
