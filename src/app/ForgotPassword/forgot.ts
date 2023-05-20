import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'forgot',
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.css'],
})
export class forgot implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  username: string = '';

  goToLogin() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log('Datos de inicio de sesión:', this.username);
    this.goToLogin();
  }
}
