import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  collabEmail: any
  collabArray: any;

  constructor(
    public dialogRef: MatDialogRef<CollaborationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService) { }

  ngOnInit(): void {
    this.getCollabEmail();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    console.log(this.data.id);

    let reqPayload = {
      noteId: this.data.id,
      collabEmail: this.collabEmail
    }

    this.noteService.addCollabService(reqPayload).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

  getCollabEmail() {
    let reqPayload = {
      noteId: this.data.id
    }
    this.noteService.getCollabService(reqPayload).subscribe((result: any) => {
      console.log(result);
      this.collabArray = result.data;
      this.collabArray.reverse();
    }, error => {
      console.log(error);
    })
  }

  removeCollab(value: any) {
    let reqPayload = {
      collabEmail: value
    }
    let noteId = this.data.id
    console.log(reqPayload);

    this.noteService.removeCollabService(reqPayload, noteId).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }
}
