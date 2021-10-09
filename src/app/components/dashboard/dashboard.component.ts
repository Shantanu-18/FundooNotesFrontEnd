import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear()
    location.href = "http://localhost:4200/login";
  }
}
