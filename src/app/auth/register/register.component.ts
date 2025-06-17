import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  onRegister() {
    
    console.log('Registro:', this.username, this.password, this.email);
  }
}