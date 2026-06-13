import { Injectable, signal } from '@angular/core';
import { FREE_VIDEO_PASSWORD, IRON_ALIGN_PASSWORDS, VALID_PASSWORDS } from '../password.const';

export type UserRole = 'all' | 'iron-align';

/** Add an entry here whenever a new role is introduced. */
export const ROLE_DEFAULT_ROUTES: Record<UserRole, string> = {
  'all': '/drive-align',
  'iron-align': '/iron-align',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly SESSION_KEY = 'ggg_auth';
  private readonly ROLE_KEY = 'ggg_role';

  readonly isLoggedIn = signal(sessionStorage.getItem(this.SESSION_KEY) === 'true');
  readonly role = signal<UserRole>((sessionStorage.getItem(this.ROLE_KEY) as UserRole) ?? 'iron-align');

  login(password: string): boolean {
    if (VALID_PASSWORDS.includes(password) || password === FREE_VIDEO_PASSWORD) {
      this.#setSession('all');
      return true;
    }
    if (IRON_ALIGN_PASSWORDS.includes(password)) {
      this.#setSession('iron-align');
      return true;
    }
    return false;
  }

  defaultRoute(): string {
    return ROLE_DEFAULT_ROUTES[this.role()];
  }

  hasAccess(required: UserRole): boolean {
    if (!this.isLoggedIn()) return false;
    if (this.role() === 'all') return true;
    return this.role() === required;
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    sessionStorage.removeItem(this.ROLE_KEY);
    this.isLoggedIn.set(false);
  }

  #setSession(role: UserRole): void {
    sessionStorage.setItem(this.SESSION_KEY, 'true');
    sessionStorage.setItem(this.ROLE_KEY, role);
    this.isLoggedIn.set(true);
    this.role.set(role);
  }
}
