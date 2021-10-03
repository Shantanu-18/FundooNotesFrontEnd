import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar) { }

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

  showSnackbar(message: any, action: any) {
    this.snackbar.open(message, action, { duration: 1500 });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }
    else {
      let reqPayload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log(this.loginForm.value);

      this.userService.loginService(reqPayload).subscribe((res) => {
        console.log(res);
      })
    }
  }
}
