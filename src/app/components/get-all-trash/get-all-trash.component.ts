import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss']
})
export class GetAllTrashComponent implements OnInit {
  noteList: any;
  isTrash: boolean = false;

  constructor(private noteService: NotesService) { }
  @Output() noteEvent= new EventEmitter<any>();

  ngOnInit(): void {
    this.getAllTrash();
    this.isTrash = true;
  }

  getAllTrash() {
    this.noteService.getAllTrashService().subscribe((result: any) => {
      console.log(result.data);

      this.noteList = result.data;
      this.noteList.reverse();
    }, error => {
      console.log(error);
    })
  }

  onEmptyBin() {
    this.noteService.emptyTrashService().subscribe((result: any) => {
      console.log(result.data);
    }, error => {
      console.log(error);
    })
  }

  Operation(value:any){
    console.log('o',value);
    this.getAllTrash();
  }
}
