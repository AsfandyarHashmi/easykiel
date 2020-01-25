import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_token: string;
  helper;
  public loggedin = false;

  constructor(private http: HttpClient) {
    this.user_token = localStorage.getItem('access_token');
    this.helper = new JwtHelperService();
    this.loggedin = this.validSession();
  }

  register(user: User) {
    return this.http.post("http://localhost:3000/users/create", user);
  }

  login(user: User) {
    return this.http.post("http://localhost:3000/users/login", user);
  }

  currentUser() {
    return this.helper.decodeToken(this.user_token);
  }

  validSession() {
    if(!this.helper.isTokenExpired(this.user_token) && this.loggedin) {
      return true;
    }
    return false;
  }

  logout() {
    this.loggedin = false;
    localStorage.removeItem('access_token');
  }
}
