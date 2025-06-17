import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileButtonComponent } from './shared/profile/button/profile-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui_gatos';
}
