import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  panelOpenState = false;
  createNotesForm!: FormGroup;
  
  constructor(private notesService: NotesService, private formBuilder: FormBuilder) { }
  
  @Output() noteCreated= new EventEmitter<any>();
  
  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      title: [],
      takeNote: []
    })
  }

  onClose() {
    if (this.createNotesForm.value.title != null && this.createNotesForm.value.takeNote != null) {
      console.log(this.createNotesForm.value);

      let reqPayload = {
        title: this.createNotesForm.value.title,
        message: this.createNotesForm.value.takeNote
      }

      this.notesService.createNoteService(reqPayload).subscribe((response:any)=>{
        console.log(response);
        this.noteCreated.emit(response);
      })
    }
  }
}
