import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  today = new Date();

  getFormattedDate(): string {
    const formattedDate = this.today.toLocaleString('pt-br', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  getFormattedHour(): string {
    return this.today.toLocaleString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
    }, 60000); // 1 min interval
  }
}
