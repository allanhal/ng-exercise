import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { UserContainer } from '../../../shared/user.container';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user: Observable<User> = this.UserContainer.select(state => state.user);
  defaultUser: User = {
    name: {
      first: 'Monsieur',
      last: 'Jean-Paul'
    },
    email: 'jean-paul.muller@example.com',
    phone: '(416)-553-2989',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    login: {
      uuid: '16547d34-47d4-4b1d-94cf-64bcd21e7047'
    }
  };

  constructor(private UserContainer: UserContainer) { }


  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.UserContainer.login(this.defaultUser)
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.UserContainer.login(this.defaultUser)
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.UserContainer.logout()
  }

}
