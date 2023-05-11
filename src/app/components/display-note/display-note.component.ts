import { Component, Input, OnInit } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() AllNotes:any
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(arr:any) {
    const dailogRef=this.dialog.open(UpdateNoteComponent,{
      width:'600px',
      height:'245px',
      data:arr
    });
    dailogRef.afterClosed().subscribe((result)=>{
      console.log('the dailog is closed');
    })
  }
  
}


