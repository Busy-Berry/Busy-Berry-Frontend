import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../cognito.service';
@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class register {
  registerForm: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private cognitoService: CognitoService
  ) {
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required, Validators.min(3000000000)],
      companyID: ['', Validators.required],
      lenguaje: ['', Validators.required],
    });
  }

  // ngOnInit(): void {}
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  lenguaje: string = '';
  companyID: string = '';
  tel: number | null = null;
  email: string = '';

  goToLogin() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Aquí puedes realizar las acciones necesarias al enviar el formulario
      console.log('Formulario enviado');
      console.log(this.registerForm.value);
      this.goToLogin();
    } else {
      // Marcar los campos como tocados para mostrar los mensajes de validación
      this.markAllFieldsAsTouched();
    }
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
  }

  markAllFieldsAsTouched() {
    Object.keys(this.registerForm.controls).forEach((field) => {
      const control = this.registerForm.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    if (control != null) {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) {
        return null; // No se puede realizar la validación, se asume que es correcto
      }

      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    }
    return null;
  }
}
