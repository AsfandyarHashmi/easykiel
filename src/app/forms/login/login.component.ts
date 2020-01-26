import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  error = false;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(res => {
      localStorage.setItem('access_token', "" + res['token']);
      this.authService.validateSession();
      this.router.navigate(['']);
    }, httperror => {
      this.error = true;
    });
  }
}
