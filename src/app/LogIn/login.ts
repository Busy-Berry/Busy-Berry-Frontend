import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../cognito.service';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class login {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cognitoService: CognitoService
  ) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }
  // ngOnInit(): void {}
  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  public signIn(): void {
    this.loading = true;
    this.cognitoService
      .signIn(this.user)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(() => {
        this.loading = false;
      });
  }

  onSubmit() {
    this.signIn();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    // console.log('Datos de inicio de sesión:', this.username, this.password);
  }
}
