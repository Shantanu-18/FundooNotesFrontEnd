import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide: boolean = true;
  loginForm!:FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get f() { return this.loginForm.controls; }

  showPassword() {
    this.hide = !this.hide;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
  }
}
