import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';

  constructor(private readonly userService: UserService) {}

  onRegister() {
    this.userService.register(this.username, this.password, this.email).subscribe({
      next: (response: any) => {
        console.log('Registro exitoso:', response);
        alert('Registro exitoso!');
      },
      error: (error: any) => {
        console.error('Error en el registro:', error);
        alert('Error en el registro: ' + error.message);
      }
    });
  }
}