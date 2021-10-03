import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  PostService(url = '', payload = null, token: boolean = false, headers: any = null) {
    return this.http.post(url, payload, token && headers)
  }

  GetService() {

  }

  PutService(url = '', payload = null, token: boolean = false, headers: any = null) {
    return this.http.put(url, payload, token && headers)
  }

  DeleteService() {

  }
}