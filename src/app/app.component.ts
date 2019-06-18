import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-to-do-list-new';
  todoList = [
    {
      name: 'Task 1',
      comment: 'comment 1',
      content: 'content 1'
    },
    {
      name: 'Task 2',
      comment: 'comment 2',
      content: 'content 2'
    },
    {
      name: 'Task 3',
      comment: 'comment 3',
      content: 'content 3'
    },
    {
      name: 'Task 4',
      comment: 'comment 4',
      content: 'content 4'
    }
  ];
}
