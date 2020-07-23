import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'boloss@email.com',
      drinkPreference: 'Vodka Cranberry à la vanille',
      hobbies: ['Ping-pong', 'tennis de table', 'Jokari'],
    },
  ];
  usersSubject = new Subject<User[]>();

  emitUsers() {
    this.usersSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
