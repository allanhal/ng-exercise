import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    name: {
      first: 'Ahsan',
      last: 'Ayaz'
    },
    email: 'almir.shakkar@me.com',
    phone: '999-131-331'
  };
  isLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
  }

}
