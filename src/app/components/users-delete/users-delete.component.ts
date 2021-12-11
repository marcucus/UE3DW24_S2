import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent implements OnInit {

  delForm = this.formDel.group({
    id:''
  });

  users?: Users[];


  constructor(private usersService : UsersService, private formDel : FormBuilder) { }

  ngOnInit(): void {
    this.getAllUsersToDel();
  }

  getAllUsersToDel(): void {
    this.usersService.getAllToDel()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  delSubmit(): void {
    this.usersService.delUser(Number(this.delForm.get('id')?.value))
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
    );
    this.delForm.reset();
  }

}
