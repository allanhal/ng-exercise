import { User } from './../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user: User

  constructor(private HttpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser()
  }
  loadUser(): any {
    const uuid = this.route.snapshot.params.uuid;
    this.HttpService.getUser(uuid).then(user => {
      this.user = user
    }).catch(err => {
      console.log(err)
    })
  }

}
