import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css'],
  imports: [CommonModule]
})
export class ProfileButtonComponent {

  private readonly auth = new AuthService();
  constructor(private readonly router: Router) { }

  get isLoggedIn(): boolean {
      const user = this.auth.getUser();
      return user !== null;
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToLogin() {
    this.router.navigate(['/auth']);
  }
}