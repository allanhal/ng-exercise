import { UserContainer } from './../../shared/user.container';
import { User } from './../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User

  constructor(private HttpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private UserContainer: UserContainer) { }

  ngOnInit() {
    this.loadUser()
  }

  loadUser() {
    const uuid = this.route.snapshot.params.uuid;

    this.HttpService.getUser(uuid).subscribe(user => {
      this.user = user
    }, err => {
      console.log(err)
    })
  }

  login() {
    this.UserContainer.logout()
    this.UserContainer.login(this.user)
    this.router.navigate([`home`])
  }

}
