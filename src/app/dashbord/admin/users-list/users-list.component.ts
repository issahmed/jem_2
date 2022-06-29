import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  users = ["ahmed","aziz","rouu","bouhmid","x_y_z"]

  constructor() { }

  ngOnInit(): void {
  }

}
