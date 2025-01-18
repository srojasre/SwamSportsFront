import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class LoginComponent implements OnInit {

  nombreUsuario = '';
  contrasenia = '';
  errorMessage = '';
  // SEguir implementado login 

  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit() {
  }

  onLogin(): void {
    this.authService.login(this.nombreUsuario, this.contrasenia).subscribe({
      next: (token) => {
        this.authService.setToken(token);
        this.router.navigate(['/mi-cuenta']); 
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
      },
    });
  }

}
