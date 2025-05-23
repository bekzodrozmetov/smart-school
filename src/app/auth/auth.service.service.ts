import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

   login(email: string, password: string): Observable<any> {
    // Fake token simulyatsiyasi
    const fakeResponse = {
      token: 'fake-jwt-token',
      user: { email, role: 'student' }
    };
    return of(fakeResponse); // rxjs dan
  }

  register(data: any): Observable<any> {
    // Ro'yxatdan o'tish muvaffaqiyatli bo'ldi deb qaytaramiz
    return of({ success: true, message: 'Registered successfully' });
  }
}
