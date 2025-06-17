import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {

  constructor(private readonly userService: UserService, private readonly authService: AuthService, private readonly router: Router) {}

  username = '';
  password = '';

  onLogin() {
    console.log('Login:', this.username, this.password);
    this.userService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        this.authService.setUser(response);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    });

  }
}