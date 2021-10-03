import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  BaseUrl = environment.BaseUrl

  constructor(private httpService: HttpService) { }

  registerSercive(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/User/Registration', reqData, false, headers);
  }

  loginService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/User/Login', reqData, true, headers);
  }

  forgotPasswordService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/User/ForgotPassword', reqData, false, headers);
  }

  resetPasswordService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PutService(this.BaseUrl + '/User/ResetPassword', reqData, true, headers);
  }
}