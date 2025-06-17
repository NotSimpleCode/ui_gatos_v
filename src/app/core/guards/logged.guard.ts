import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedGuard  {
    private readonly auth = new AuthService();
    canActivate(): boolean {
        return this.auth.getUser() !== null;
    }
}