import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  myName: string = 'Chris';
  toDoList: Todo[] = [
    {
      task: 'Wash dog',
      completed: false,
    },
    {
      task: 'Eat dinner',
      completed: false,
    },
    {
      task: 'Go to doctor',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
