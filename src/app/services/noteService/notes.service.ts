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
    return this.httpService.DeleteService(this.BaseUrl + '/notes/' + reqPayload.id + '/Trash', null, true, headers)
  }

  archiveNoteService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.PutService(this.BaseUrl + '/notes/' + reqPayload.id + '/Archive', null, true, headers)
  }

  getAllArchiveService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.GetService(this.BaseUrl + '/notes/Archived/', true, headers);
  }
  getAllTrashService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.GetService(this.BaseUrl + '/notes/Trashed/', true, headers);
  }

  restoreService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.PutService(this.BaseUrl + '/notes/' + reqPayload.noteId + '/Trash/Restore/', null, true, headers)
  }

  deleteForeverService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.DeleteService(this.BaseUrl + '/notes/' + reqPayload.noteId + '/Trash/Delete/', null, true, headers)
  }

  emptyTrashService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.DeleteService(this.BaseUrl + '/notes/Trash/Empty', null, true, headers)
  }

  unarchiveService(reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.PutService(this.BaseUrl + '/notes/' + reqPayload.noteId + '/Archive/Unarchive/', null, true, headers)
  }
}
