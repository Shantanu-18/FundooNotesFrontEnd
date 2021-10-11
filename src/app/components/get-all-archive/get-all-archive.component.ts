import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {
  noteList: any;
  isArchive: boolean = false;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getAllArchive();
    this.isArchive = true;
  }

  getAllArchive() {
    this.noteService.getAllArchiveService().subscribe((result: any) => {
      console.log(result.data);

      this.noteList = result.data;
      this.noteList.reverse();
    }, error => {
      console.log(error);
    })
  }

  Operation(value: any) {
    console.log(value);
    this.getAllArchive();
  }
}
