import { Task } from './../model/task.model';
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
//import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})



export class ListComponent implements OnInit {

  public taskList: Task[] = [];
  //form: FormGroup

  description: string = null;
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Input() item: Task;
  @Output() remove: EventEmitter<Task> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();



  //constructor(private fb: FormBuilder) {
    
  //}

  ngOnInit() {
  }

  getTodoList() {
    return this.taskList;
  }
  //addTodo() {
    //const description = this.form.controls['description'];
   // console.log(description);


  //}

  addTask() {
    this.taskList.push(new Task());
  }

  saveList(newDescription: string) {
    console.log(newDescription);
    this.submit.emit(newDescription);
    this.description = null;
  }


  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }

  }

  editTask(index: number) {
    this.taskList = this.taskList;
    this.update.emit(this.taskList);

  }

}