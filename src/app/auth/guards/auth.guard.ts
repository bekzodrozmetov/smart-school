import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token'); // yoki sizda token qanday saqlansa
  const router = inject(Router);

  if (token) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
