import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notesArray: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateComponent,{
      panelClass: 'dialog-container-custom',
      width:"600px",
      height:"auto",
      data:note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
