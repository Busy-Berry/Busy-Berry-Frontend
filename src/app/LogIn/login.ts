import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class login implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log('Datos de inicio de sesión:', this.username, this.password);
  }
}
