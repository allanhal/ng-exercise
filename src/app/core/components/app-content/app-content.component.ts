import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { UserContainer } from '../../../shared/user.container';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: Observable<User> = this.UserContainer.select(state => state.user);
  defaultUser: User = {
    name: {
      first: 'Connor',
      last: 'Nguyen'
    },
    email: 'connor.nguyen@example.com',
    phone: '061-183-7320',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
    login: {
      uuid: '2985dd3c-0f12-404f-9a2b-525745a6d406'
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
   * @desc Logs the user out
   */
  logout() {
    this.UserContainer.logout()
  }

}
