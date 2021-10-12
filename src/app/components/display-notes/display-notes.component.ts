import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollaborationComponent } from '../collaboration/collaboration.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notesArray: any;

  constructor(public dialog: MatDialog) { }
  @Output() noteUpdated = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      panelClass: 'dialog-container-custom',
      width: "600px",
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.noteUpdated.emit(result);
    });
  }

  operation(value: any) {
    this.noteUpdated.emit(value);
  }

  collabDialog(note: any) {
    const dialogRef = this.dialog.open(CollaborationComponent, {
      panelClass: 'dialog-container-custom',
      width: "600px",
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.noteUpdated.emit(result);
    });
  }
}
