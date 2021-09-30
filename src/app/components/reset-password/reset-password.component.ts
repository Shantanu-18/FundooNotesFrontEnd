import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showPassword() {
    this.hide = !this.hide;
  }
}


