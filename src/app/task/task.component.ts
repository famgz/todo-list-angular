import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/tasks.mode';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task?: Task;

}
