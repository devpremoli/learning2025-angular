import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('user') === 'admin';

  if (!isAuthenticated) {
    alert('Access Denied! Redirecting to Home.');
    router.navigate(['/home']);
    return false;
  }

  return true;
};