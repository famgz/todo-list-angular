import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/tasks.model';
import { TaskService } from '../services/task.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  public taskId = '';

  ngOnInit(): void {
    if (this.task) {
      this.taskId = '#' + this.task._id;
    }
  }

  constructor(private taskService: TaskService) {}

  isTaskLate() {
    const now = new Date();
    const currHour = now.getHours();
    const currMin = now.getMinutes();
    const [taskHour, taskMin] = this.task.dueHour.split(':').map(Number);
    if (taskHour < currHour) return true;
    if (taskHour > currHour) return false;
    return taskMin > currMin;
  }

  toggleTaskStatus(): void {
    const completed = this.task.completed;
    this.task.completed = !completed;
    this.taskService
      .updateTask(this.task._id!, this.task)
      .pipe(first())
      .subscribe({
        error: (err) => console.error(err),
      });
  }
}
