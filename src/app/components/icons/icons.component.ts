import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: any;
  @Input() isArchived: any;
  @Input() isTrashed: any;
  colorArray = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'];

  constructor(private noteService: NotesService) { }
  @Output() noteOperation = new EventEmitter<any>();
  @Output() trashOperation = new EventEmitter<any>();
  @Output() archiveOperation = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onDelete() {
    let reqPayload = {
      id: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.deleteNoteService(reqPayload).subscribe((result) => {
      console.log(result);
      this.noteOperation.emit(result);
    })
  }

  onArchive() {
    let reqPayload = {
      id: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.archiveNoteService(reqPayload).subscribe((result) => {
      console.log(result);
      this.noteOperation.emit(result);
    })
  }

  onUnarchive() {
    let reqPayload = {
      noteId: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.unarchiveService(reqPayload).subscribe((result) => {
      console.log(result);
      this.archiveOperation.emit(result);
    })
  }

  onDeleteForever() {
    let reqPayload = {
      noteId: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.deleteForeverService(reqPayload).subscribe((result) => {
      console.log(result);
      this.trashOperation.emit(result);
    })
  }

  onRestore() {
    console.log('noteId', this.note.id);

    let reqPayload = {
      noteId: this.note.id
    }

    this.noteService.restoreService(reqPayload).subscribe((result) => {
      console.log(result);
      this.trashOperation.emit(result);
    })
  }

  colorCode(value: any) {
    console.log(value);

    let reqPayload = {
      noteId: this.note.id,
      color: value
    }
    console.log(reqPayload);

    this.noteService.changeColorService(reqPayload).subscribe((result) => {
      console.log(result);
      this.noteOperation.emit(result);
      this.archiveOperation.emit(result);
      this.trashOperation.emit(result);
    })
  }
}
