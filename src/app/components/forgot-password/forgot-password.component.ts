import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgotPassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get f() { return this.forgotPassword.controls; }

  showSnackbar(message: any, action: any) {
    this.snackbar.open(message, action, { duration: 1500 });
  }

  onSubmit() {

    this.submitted = true;

    if (this.forgotPassword.invalid) {
      return;
    }
    else {
      let reqPayload = {
        email: this.forgotPassword.value.email
      }

      console.log(this.forgotPassword.value);

      this.userService.forgotPasswordService(reqPayload).subscribe((res) => {
        console.log(res)
      })
    }
  }
}