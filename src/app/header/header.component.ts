import { Component } from '@angular/core';
import { getFormattedDate, getFormattedHour } from '../shared/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  today = new Date();

  formattedHour = getFormattedHour(this.today);
  formattedDate = getFormattedDate(this.today);

  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
    }, 60000); // 1 min interval
  }
}
