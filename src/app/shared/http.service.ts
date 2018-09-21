import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserInterface } from '../core/models/random-user-interface.model';
import { User } from '../core/models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>(subscriber => {
      this.httpClient.get<RandomUserInterface>(`https://randomuser.me/api/?results=5&inc=name,email,phone,picture,login&seed=allan`).subscribe(randomUserInterface => {
        subscriber.next(randomUserInterface.results)
      }, err => {
        subscriber.error(err)
      })
    })
  }

  getUser(uuid): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.httpClient.get<RandomUserInterface>(`https://randomuser.me/api/?results=5&inc=name,email,phone,picture,login&seed=allan`).subscribe(randomUserInterface => {
        resolve(randomUserInterface.results.find(user => user.login.uuid == uuid))
      }, err => {
        reject(err)
      })
    })
  }

  // sendEmail(user: string, message: string) {
  //   this.httpClient.get('')
  // }

}
