import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: boolean = false;

  constructor() {}

  signIn() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.isAuthenticated = true;
      resolve(true);
    }, 2000);
    });
  }

  signOut() {
    this.isAuthenticated = false;
  }
}
