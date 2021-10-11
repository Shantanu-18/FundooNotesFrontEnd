import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgotPassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get f() { return this.forgotPassword.controls; }


  onSubmit() {

    this.submitted = true;

    if (this.forgotPassword.invalid) {
      this.snackbar.open('Try Again', '', { duration: 1500 });
      return;
    }
    else {
      let reqPayload = {
        email: this.forgotPassword.value.email
      }

      this.snackbar.open('Mail to reset password is sent to you.', '', { duration: 1500 });

      console.log(this.forgotPassword.value);

      this.userService.forgotPasswordService(reqPayload).subscribe((res) => {
        console.log(res)
      }, error => {
        this.snackbar.open(error, '', { duration: 1500 });
        console.log(error);
      });
    }
  }
}