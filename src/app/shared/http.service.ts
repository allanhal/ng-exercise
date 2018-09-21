import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserInterface } from './random-user-interface';
import { User } from '../core/models/user.model';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.httpClient.get<RandomUserInterface>(`https://randomuser.me/api/?results=5`).subscribe(randomUserInterface => {
        resolve(randomUserInterface.results)
      }, err => {
        reject(err);
      })
    })
  }

}
