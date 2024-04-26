import { Task } from '../models/tasks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  key = "a3c70c07c4374a73a3ad81598399834e";
  apiUrl = `https://crudcrud.com/api/${this.key}/tasks`;

  private tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  listTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`)
      .pipe(
        map(data => {
          this.tasks = data;
          return this.tasks;
        })
      );
  }

  getTask(id: string): Task | undefined {

    let task;
    this.http
      .get<Task>(`${this.apiUrl}/${id}`)
      .pipe(first())
      .subscribe({
        next: (response: Task) => {
          console.log(`Pesquisa por id ${response}`);
          task = response;
        },
        error: (err) => {
          console.error(err);
        },
      });

      return task ;

  }

  addTask(newTask: Task) {
    this.http
      .post<Task>(`${this.apiUrl}`, newTask)
      .pipe(first())
      .subscribe({
        next: (response: Task) => {
          console.log(response);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  updateTask(newTask: Task) {
    this.http
      .put<Task>(`${this.apiUrl}/${newTask.id}`, newTask)
      .pipe(first())
      .subscribe({
        next: (response: Task) => {
          console.log(response);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  deleteTask(id: string) {
    console.log(`${this.apiUrl}/${id}`);
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.listTasks(); 
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}