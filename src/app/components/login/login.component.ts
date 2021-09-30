import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private formBuilder: FormBuilder) { }

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') }

  showPassword() {
    this.hide = !this.hide;
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
