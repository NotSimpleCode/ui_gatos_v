import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule]
})
export class UserProfileComponent implements OnInit {
  name = '';
  email = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    const user = this.auth.getUser() as { username: string; email: string };
    console.log('User Profile Component Initialized', user);
    if (user) {
      this.name = user.username;
      this.email = user.email;
    }
  }
  onLogout() {
    this.auth.clearToken();
    this.router.navigate(['']);
  }
}
