import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DisplayNoteComponent } from '../display-note/display-note.component';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';



@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  NoteData:any;

  constructor(public dialogRef:MatDialogRef<DisplayNoteComponent> ,@Inject(MAT_DIALOG_DATA) public data:any,private note:NoteServiceService) {
    console.log(data);
    this.NoteData=data;
    
   }

  ngOnInit(): void {
  }
  submit(){
    let data={
      "title": this.NoteData.title,
      "description": this.NoteData.description
    }
    this.dialogRef.close();
    this.note.UpdateNote(data,this.NoteData.noteId).subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
      
    })
  }

}
