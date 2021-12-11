import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {

  users?: Users[];
  user! : Users;

  updateForm = this.formBuilder.group({
    id:'',
    firstname:'',
    lastname:''
  });

  constructor(private usersService : UsersService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.getAllUsersToUp();
  }

  getAllUsersToUp(): void {
    this.usersService.getAllToUp()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSubmit():void{
    this.user = this.updateForm.value;

    this.usersService.updateUser(this.user)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
      this.updateForm.reset();
  }
}
