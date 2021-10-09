import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: any;

  constructor(private noteService: NotesService) { }
  // @Output() noteUpdated= new EventEmitter<any>();

  ngOnInit(): void {
  }

  onDelete() {
    let reqPayload = {
      id: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.deleteNoteService(reqPayload).subscribe((result) => {
      console.log(result);
    })
  }

  onArchive() {
    let reqPayload = {
      id: this.note.id
    }
    console.log('noteId', this.note.id);

    this.noteService.archiveNoteService(reqPayload).subscribe((result) => {
      console.log(result);
    })
  }
}
