import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

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

  searchTerm: string;

  showIndex: number;

  constructor() {}

  removeTask(index: number) {
    this.toDoList.splice(index, 1);
  }

  addTask(form: NgForm) {
    let newTodo: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.toDoList.push(newTodo);
    form.reset();
  }

  completeTask(index: number) {
    this.toDoList[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  filter() {
    if (!this.searchTerm) {
      return this.toDoList;
    } else {
      return this.toDoList.filter((item) => {
        return item.task.toLowerCase().includes(this.searchTerm);
      });
    }
  }

  setShowIndex(i: number) {
    this.showIndex = i;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }
  editTask(form: NgForm, i: number) {}

  ngOnInit(): void {}
}
