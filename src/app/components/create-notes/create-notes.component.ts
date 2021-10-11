import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  panelOpenState = false;
  title:any
  message:any
  
  constructor(private notesService: NotesService) { }
  
  @Output() noteCreated= new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  onClose() {
    if (this.title != null && this.message != null) {
      
      let reqPayload = {
        title: this.title,
        message: this.message
      }
      this.title='',
      this.message=''
      console.log(reqPayload);

      this.notesService.createNoteService(reqPayload).subscribe((response:any)=>{
        console.log(response);
        this.noteCreated.emit(response);
      })
    }
  }
}
