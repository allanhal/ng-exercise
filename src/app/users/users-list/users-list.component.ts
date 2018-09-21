import { User } from './../../core/models/user.model';
import { HttpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users: User[]

  constructor(private HttpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers(): any {
    this.HttpService.getUsers().then(users => {
      this.users = users
    }).catch(err => {
      console.log(err)
    })
  }

  gotoDetail(uuid): void {
    this.router.navigate(['/users/uuid/', { uuid: uuid }]);
  }

}
