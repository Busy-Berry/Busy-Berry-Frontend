import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
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
  loading: boolean;
  isConfirm: boolean;
  user: IUser;
  // username: string;
  // password: string;
  // confirmPassword: string;
  // lenguaje: string;
  // companyID: string;
  // tel: number;
  // email: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private cognitoService: CognitoService
  ) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
    // this.username = '';
    // this.password = '';
    // this.confirmPassword = '';
    // this.lenguaje = '';
    // this.companyID = '';
    // this.tel = NaN;
    // this.email = '';
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],

      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.min(3000000000)]],
      companyID: ['', Validators.required],
      lenguaje: ['', Validators.required],
    });
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService
      .signUp(this.user)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
        this.router.navigate(['/confirm']);
      })
      .catch(() => {
        this.loading = false;
      });
  }

  // ngOnInit(): void {}
  goToLogin() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.user = {
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value,
      code: null,
      phoneNumber: this.registerForm.get('tel')!.value,
      nickName: this.registerForm.get('username')!.value,
    };

    console.log(this.user);
    if (this.registerForm.valid) {
      this.signUp();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.keys(this.registerForm.controls).forEach((field) => {
      const control = this.registerForm.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    if (control != null) {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) {
        return null;
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
