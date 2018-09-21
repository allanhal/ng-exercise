import { User } from './../../core/models/user.model';
import { HttpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users: User[]

  constructor(private HttpService: HttpService) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers(): any {
    for (let index = 0; index < 3; index++) {
    }
    this.HttpService.getUsers().then(users => {
      this.users = users
    }).catch(err => {
      console.log(err)
    })
  }

}
