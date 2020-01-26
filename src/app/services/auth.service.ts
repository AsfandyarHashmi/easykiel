import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helper;
  public loggedin = false;

  constructor(private http: HttpClient) {
    this.helper = new JwtHelperService();
  }

  register(user: User) {
    return this.http.post("http://localhost:3000/users/create", user);
  }

  login(user: User) {
    return this.http.post("http://localhost:3000/users/login", user);
  }

  currentUser() {
    return this.helper.decodeToken(this.getToken());
  }

  validateSession() {
    if(!this.helper.isTokenExpired(this.getToken())) {
      this.loggedin = true;
      return true;
    }
    this.loggedin = false;
    return false;
  }

  logout() {
    this.loggedin = false;
    localStorage.removeItem('access_token');
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
