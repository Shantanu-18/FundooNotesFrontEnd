import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = true;
  resetPassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  showPassword() {
    this.hide = !this.hide;
  }

  showSnackbar(message: any, action: any) {
    this.snackbar.open(message, action, { duration: 1500 });
  }

  get f() { return this.resetPassword.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.resetPassword.invalid) {
      return;
    }
    else {
      let reqPayload = {
        password: this.resetPassword.value.password,
        confirm: this.resetPassword.value.confirmPassword
      }
      console.log(this.resetPassword.value);

      this.userService.resetPasswordService(reqPayload).subscribe((res) => {
        console.log(res)
      })
    }
  }
}