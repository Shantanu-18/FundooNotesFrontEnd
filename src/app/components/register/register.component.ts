import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
   registerForm!: FormGroup;
   submitted = false;
   hide: boolean = true;

   constructor(private formBuilder: FormBuilder, private userService: UserService) { }

   ngOnInit() {
      this.registerForm = this.formBuilder.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
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

   get f() { return this.registerForm.controls; }

   onSubmit() {

      this.submitted = true;

      if (this.registerForm.invalid) {
         return;
      }
      else {
         let reqPayload = {
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
         }

         console.log(this.registerForm.value);

         this.userService.registerSercive(reqPayload).subscribe((res) => {
            console.log(res)
         })
      }
   }
}
