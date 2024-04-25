import { Component, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @ViewChild('myModal') myModal!: ElementRef;

  openModal() {
    $(this.myModal.nativeElement).modal('show');
  }

  closeModal() {
    $(this.myModal.nativeElement).modal('hide');
  }
}
