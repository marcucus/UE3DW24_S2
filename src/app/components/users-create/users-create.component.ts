import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  
  user!: Users;

  createForm = this.formBuilder.group({
    firstname:'',
    lastname:''
  });
  
  constructor(private usersService : UsersService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  createSubmit():void {
    this.user = this.createForm.value;
    this.usersService.createUser(this.user)
    .subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.createForm.reset();
  }

}
