import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = {
    name: '',
    comment: '',
    content: '',
    isDone: false
  };
  todoList = [
    {
      name: 'Task 1',
      comment: 'comment 1',
      content: 'content 1',
      isDone: false
    },
    {
      name: 'Task 2',
      comment: 'comment 2',
      content: 'content 2',
      isDone: false
    },
    {
      name: 'Task 3',
      comment: 'comment 3',
      content: 'content 3',
      isDone: false
    },
    {
      name: 'Task 4',
      comment: 'comment 4',
      content: 'content 4',
      isDone: false
    }
  ];

  addTodo() {
    this.todoList.push({
      name: this.newTodo.name,
      comment: this.newTodo.comment,
      content: this.newTodo.content,
      isDone: false
    });
    this.clearTodo();
  }

  clearTodo() {
    this.newTodo = {
      name: '',
      comment: '',
      content: '',
      isDone: false
    };
  }

  switchIsDoneTodo(item) {
    item.isDone = !item.isDone;
  }

  removeTodo(item) {
    this.todoList = this.todoList.filter(obj => obj !== item);
  }
}
