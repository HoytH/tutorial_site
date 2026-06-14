import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-qr-login',
  standalone: true,
  template: '',
})
export class QrLoginComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token') ?? '';
    const success = this.auth.login(token);
    if (success) {
      this.router.navigateByUrl(this.auth.defaultRoute());
    } else {
      this.router.navigate(['/login']);
    }
  }
}
