import { User } from './../../core/models/user.model';
import { HttpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[]

  constructor(private HttpService: HttpService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers(): any {
    this.HttpService.getUsers().subscribe(users => {
      this.users = users
    }, err => {
      console.log(err)
    })
  }

  gotoDetail(uuid): void {
    this.router.navigate([`./${uuid}`], { relativeTo: this.route })
  }

}
