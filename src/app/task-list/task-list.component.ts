import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

 public table:Array<any> = [];
 public userIndex!: number;
 public login!: string;
 public password!: string;
 public email!: string;
 public editStatus = false;



  constructor() { }
  ngOnInit(): void {
  }

  addUser(): void {
    let obj = {
      login:  this.login,
      password:  this.password,
      email:  this.email
    }
    this.table.push(obj);
    console.log(this.table);
    this.login = '';
    this.password = '';
    this.email = '';
  }

  deleteUser(index: number):void {
    this.table.splice(index,1)
  }

  editUser(index: number):void {
    this.editStatus = !this.editStatus;
    this.userIndex = index;

    this.login = this.table[index].login;
    this.password = this.table[index].password;
    this.email = this.table[index].email;
  }

  saveEditUser(): void {

    this.table[this.userIndex].login = this.login 
    this.table[this.userIndex].password = this.password 
    this.table[this.userIndex].email = this.email 


    this.login = '';
    this.password = '';
    this.email = '';
    this.editStatus = !this.editStatus;
  }
}
