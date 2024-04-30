import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/tasks.model';
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
    dueHour: new FormControl(
      '00:00',
      Validators.pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    ),
  });

  ngOnInit(): void {
    if (this.task) {
      this.choresForm.patchValue(this.task);
    }
  }

  addTarefa(): void {
    this.choreEmitter.emit(this.choresForm);
    this.choresForm.reset();
  }

  handleEditTarefa(): void {
    this.editEmitter.emit(this.choresForm);
  }

  deletarTarefa(): void {
    this.deleteEmitter.emit();
  }
}
