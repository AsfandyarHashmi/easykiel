import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  error = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.user.user_role = 1;
  }

  onSubmit() {
    this.authService.register(this.user).subscribe(res => {
      localStorage.setItem('access_token', "" + res['token']);
      this.authService.loggedin = true;
      this.router.navigate(['']);
    }, httperror => {
      this.error = true;
    });
  }
}
