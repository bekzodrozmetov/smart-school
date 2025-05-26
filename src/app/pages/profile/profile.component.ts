import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user = {
    name: 'Azizbek Sharipov',
    email: 'sharipovazizbek574@gmail.com',
    photoUrl: 'https://i.pravatar.cc/150?img=12', // sinov uchun
  };

  logout() {
    // Tokenni localStorage'dan o‘chirish
    localStorage.removeItem('token');
    // Login sahifasiga redirect
    window.location.href = '/login';
  }
}
