import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateTask, Task } from '../models/tasks.model';
import { TaskService } from '../services/task.service';
declare var $: any;

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent implements OnInit {
  @Output() choreEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter();

  @Input() task?: Task;

  modalTitle: string = 'Nova Tarefa';

  choresForm = new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    dueHour: new FormControl(),
  });

  ngOnInit(): void {
    if (this.task) {
      this.choresForm.patchValue(this.task);
    }
  }

  addTarefa(): void {
    this.choreEmitter.emit(this.choresForm);
  }

  handleEditTarefa(): void {
    // this.choresForm.patchValue(task)
    this.editEmitter.emit(this.choresForm);
  }

  deletarTarefa(): void {
    this.deleteEmitter.emit();
  }
}
