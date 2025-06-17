import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css'],
  imports: [CommonModule]
})
export class ProfileButtonComponent {
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private readonly router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToLogin() {
    this.router.navigate(['/auth']);
  }
}