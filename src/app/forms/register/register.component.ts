import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    this.authService.register(this.user).subscribe(token => {
      localStorage.setItem('access_token', "" + token);
      this.router.navigate(['']);
    }, httperror => {
      this.error = true;
    });
  }
}
