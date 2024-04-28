import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddTask, Task } from '../models/tasks.model';
declare var $: any;

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @Output() choreEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter();


  modalTitle: string = 'Nova Tarefa';

  choresForm = new FormGroup({
    title: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
    category: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
    dueHour: new FormControl("",[Validators.required]),
  });

  addChore(): void {
    this.choreEmitter.emit(this.choresForm);
  }

  editChore():void{
    this.editEmitter.emit(this.choresForm);

  }

}
