import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  template:
    `<div *ngFor="let user of users; index as i; first as isFirst; last as isLast; odd as isOdd; even as isEven; count as isCount">
      {{ i + '-'}}
      {{ user }}
      {{ isFirst ? ' - first' : '' }}
      {{ isLast ? ' - last' : '' }}
      {{ isOdd ? ' - odd' : '' }}
      {{ isEven ? ' - even' : '' }}
      {{ isCount ? ' - count' : '' }}
  </div>`
})
export class AppComponent {
  users = ['Bob', 'Peter', 'Jane', 'John'];
}
