import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
    template: `
<header>
  <a routerLink="/">
    <img
      ngSrc="assets/images/Logo.PNG"
      alt="Gentle Gator Logo"
      width="200"
      height="50"
      priority
      style="width: 200px; height: 50px; object-fit: contain;"
    />
  </a>
  @if (auth.isLoggedIn()) {
    <nav>
      @if (auth.role() === 'all') {
        <a routerLink="/drive-align" routerLinkActive="active">Drive Align</a>
      }
      <a routerLink="/iron-align" routerLinkActive="active">Iron Align</a>
      @if (auth.role() === 'all') {
        <a routerLink="/all-videos" routerLinkActive="active">All Videos</a>
      }
      <button class="logout-btn" (click)="logout()">Logout</button>
    </nav>
  }
</header>
  `,
    styles: `
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--white);
      box-shadow: var(--box-shadow);
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    nav a {
      text-decoration: none;
      color: var(--primary-green);
      font-weight: 500;
      padding: 0.25rem 0;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s;
    }

    nav a.active {
      border-bottom-color: var(--primary-green);
    }

    .logout-btn {
      background: none;
      border: 1px solid var(--primary-green);
      color: var(--primary-green);
      padding: 0.3rem 0.85rem;
      border-radius: var(--border-radius);
      cursor: pointer;
      font-size: 0.9rem;
    }

    .logout-btn:hover {
      background-color: var(--primary-green);
      color: var(--white);
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected auth = inject(AuthService);
  #router = inject(Router);

  protected logout(): void {
    this.auth.logout();
    this.#router.navigate(['/login']);
  }
}

