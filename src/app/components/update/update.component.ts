import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  message: any
  noteId: any

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService) {
    // console.log(data);
    this.title = data.title,
    this.message = data.message
    this.noteId = data.id
  }
  @Output() noteUpdated = new EventEmitter<any>();

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose() {
    let reqPayload = {
      title: this.title,
      message: this.message,
      id: this.noteId
    }
    console.log('updated', reqPayload);

    this.noteService.updateNoteService(reqPayload).subscribe((result) => {
      console.log(result);
      this.noteUpdated.emit(result);
    })

    this.dialogRef.close();
  }
}
