import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = true;
  resetPassword!: FormGroup;
  submitted = false;
  param : any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar, private route: ActivatedRoute, private router: Router) { }

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


  get f() { return this.resetPassword.controls; }

  onSubmit() {
    
    this.submitted = true;
    
    if (this.resetPassword.invalid) {
      this.snackbar.open('Password not changed', '', { duration: 1500 });
      return;
    }
    else {
      let reqPayload = {
        password: this.resetPassword.value.password,
        confirmPassword: this.resetPassword.value.confirmPassword
      }
      console.log(this.resetPassword.value);

      this.snackbar.open('Password changed Successfully', '', { duration: 1500 });
      
      this.route.paramMap.subscribe(params => {
        this.param = params.get("token");
      });
      
      localStorage.setItem("token", this.param);

      this.userService.resetPasswordService(reqPayload,this.param).subscribe((res) => {
        console.log(res)
      }, error => {
        console.log(error);
        this.snackbar.open(error, '', { duration: 1500 });
      })

      this.router.navigateByUrl('/login')
    }
  }
}