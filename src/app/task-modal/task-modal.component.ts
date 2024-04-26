import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddTask, Task } from '../models/tasks.mode';
declare var $: any;

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @Output() choreEmitter: EventEmitter<any> = new EventEmitter();

  modalTitle: string = 'Nova Tarefa';

  choresForm = new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    dueHour: new FormControl(),
  });

  addChore(): void {
    this.choreEmitter.emit(this.choresForm);
    const chores = this.choresForm.getRawValue();
    console.log(chores);
  }
}
