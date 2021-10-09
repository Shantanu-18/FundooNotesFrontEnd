import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList = [];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteService.getAllNoteService().subscribe((result: any) => {
      console.log(result);
      console.log(result.data);

      this.noteList = result.data;
      this.noteList.reverse();
    }, error => {
      console.log(error);
    }
    )
  }

  noteData(value: any) {
    console.log(value);
    this.getAllNotes();
  }

  updatedData(value: any) {
    console.log('updated', value);
    this.getAllNotes();
  }
}
