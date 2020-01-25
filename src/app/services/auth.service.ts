import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post("http://localhost:3000/users/create", user);
  }

  login(user: User) {
    return this.http.post("http://localhost:3000/users/login", user);
  }
}
