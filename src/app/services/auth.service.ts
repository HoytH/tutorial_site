import { Injectable, signal } from '@angular/core';
import { FREE_VIDEO_PASSWORD, VALID_PASSWORDS } from '../password.const';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly SESSION_KEY = 'ggg_auth';

  readonly isLoggedIn = signal(sessionStorage.getItem(this.SESSION_KEY) === 'true');

  login(password: string): boolean {
    if (VALID_PASSWORDS.includes(password) || password === FREE_VIDEO_PASSWORD) {
      sessionStorage.setItem(this.SESSION_KEY, 'true');
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.isLoggedIn.set(false);
  }
}
