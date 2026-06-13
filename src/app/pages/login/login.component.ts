import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <div class="login-wrapper">
      <div class="login-card">
        <h1>Gentle Gator Golf</h1>
        <p class="subtitle">Enter your access code to view tutorials</p>
        <input
          type="password"
          [(ngModel)]="password"
          (keyup.enter)="submit()"
          placeholder="Access code"
          autocomplete="current-password"
        />
        <button (click)="submit()">Unlock</button>
        @if (error()) {
          <p class="error">Incorrect access code. Please try again.</p>
        }
      </div>
    </div>
  `,
  styles: `
    .login-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 120px);
    }

    .login-card {
      background: var(--white);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
      padding: 2.5rem;
      text-align: center;
      min-width: 320px;
      max-width: 400px;
      width: 100%;
    }

    h1 {
      color: var(--primary-green);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #666;
      margin-bottom: 1.5rem;
    }

    input[type="password"] {
      width: 100%;
      padding: 0.6rem 0.75rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: var(--border-radius);
      font-size: 1rem;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 0.65rem;
      background-color: var(--primary-green);
      color: var(--white);
      border: none;
      border-radius: var(--border-radius);
      font-size: 1rem;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--light-green);
    }

    .error {
      color: #dc3545;
      margin-top: 0.75rem;
      font-size: 0.9rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  #auth = inject(AuthService);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  protected password = '';
  protected error = signal(false);

  protected submit(): void {
    if (this.#auth.login(this.password)) {
      const returnUrl = this.#route.snapshot.queryParamMap.get('returnUrl') ?? '/drive-align';
      this.#router.navigateByUrl(returnUrl);
    } else {
      this.error.set(true);
    }
  }
}
