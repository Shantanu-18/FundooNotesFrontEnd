import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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

    if (this.loginForm.invalid) {
      this.snackbar.open('Login Failed', '', { duration: 1500 });
      return;
    }
    else {
      let reqPayload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log(this.loginForm.value);

      this.snackbar.open('Login Successful', '', { duration: 1500 });

      this.userService.loginService(reqPayload).subscribe((res: any) => {
        console.log(res);

        localStorage.setItem("token", res.token);
        localStorage.setItem("firstName", res.data.firstName);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("email", res.data.email);
        this.router.navigateByUrl('/dashboard/notes')
      }, error => {
        console.log(error);
        this.snackbar.open(error, '', { duration: 1500 });
      });
    }
  }
  onForgotPassword(){
    this.router.navigateByUrl('/forgotPassword');
  }

  onCreateAccount(){
    this.router.navigateByUrl('/register');
  }
}
