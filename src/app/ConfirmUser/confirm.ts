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
  selector: 'confirm',
  templateUrl: './confirm.html',
  styleUrls: ['./confirm.css'],
})
export class confirm {
  codeForm: FormGroup;
  codex: String;
  loading: boolean;
  user: IUser;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private cognitoService: CognitoService
  ) {
    this.loading = false;
    this.codex = '';
    this.user = {} as IUser;
    this.codeForm = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService
      .confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(() => {
        this.loading = false;
      });
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  onSubmitCode() {
    console.log(this.codeForm.value);
    if (this.codeForm.valid) {
      this.confirmSignUp();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.keys(this.codeForm.controls).forEach((field) => {
      const control = this.codeForm.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }
}
