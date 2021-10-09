import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  BaseUrl = environment.BaseUrl
  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token");
  }

  createNoteService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/notes', reqData, true, headers);
  }

  getAllNoteService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.GetService(this.BaseUrl + '/notes', true, headers);
  }

  updateNoteService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.PutService(this.BaseUrl + '/notes/' + reqPayload.id + '/Update', reqPayload, true, headers)
  }

  deleteNoteService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.DeleteService(this.BaseUrl + '/notes/' + reqPayload.id + '/Trash',null, true, headers)
  }
}
