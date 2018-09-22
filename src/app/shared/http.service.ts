import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserInterface } from '../core/models/random-user-interface.model';
import { User } from '../core/models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  apiUrl: string = `https://randomuser.me/api/?results=20&inc=name,email,phone,picture,login&seed=allan`

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>(subscriber => {
      this.httpClient.get<RandomUserInterface>(this.apiUrl).subscribe(randomUserInterface => {
        subscriber.next(randomUserInterface.results)
      }, err => {
        subscriber.error(err)
      })
    })
  }

  getUser(uuid): Observable<User> {
    return new Observable<User>(subscriber => {
      this.getUsers().subscribe(users => {
        subscriber.next(users.find(user => user.login.uuid == uuid))
      }, err => {
        subscriber.error(err)
      })
    })
  }
}
