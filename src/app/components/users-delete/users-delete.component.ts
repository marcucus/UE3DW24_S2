import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent implements OnInit {

  users?: Users[];

  constructor(private usersService : UsersService) { }

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

}
