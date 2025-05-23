import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthServiceService } from '../auth.service.service';
import { TokenStorageService } from '../token-storage.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'] // yoki .css
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  checked: boolean = false;


  constructor(private authService: AuthServiceService, private tokenService: TokenStorageService ) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.tokenService.saveToken(res.token);
        console.log('Login successful:', res);
        // navigatsiya qilish yoki dashboardga o‘tish
      },
      error: (err) => {
        this.errorMessage = 'Login failed';
      }
    });
  }
}
