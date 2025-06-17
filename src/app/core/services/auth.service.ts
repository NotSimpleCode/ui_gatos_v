import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly tokenKey = 'authToken';
  private readonly userKey = 'user';

  // usa el localstorage para almacenar un token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // verificamos si hay un token en el localstorage para obtenerlo
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // cuando cierra sesion borramos el token para que no quede registro
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  // obtiene el usuario del localstorage y lo deserializa
  getUser(): object | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  // usa el localstorage para almacenar un user como objeto serializado
  setUser(user: Object): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
}
