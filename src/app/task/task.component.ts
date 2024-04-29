import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/tasks.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task?: Task;

  taskId = this.task ? this.task._id : undefined;
}
