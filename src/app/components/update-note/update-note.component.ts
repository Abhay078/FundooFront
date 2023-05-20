import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DisplayNoteComponent } from '../display-note/display-note.component';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  NoteData:any;

  constructor(public dialogRef:MatDialogRef<DisplayNoteComponent> ,@Inject(MAT_DIALOG_DATA) public data:any,private note:NoteServiceService,public snacker:MatSnackBar) {
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
      this.snacker.open('Note Updated Successfully','Close')
      console.log(res);
    },(error)=>{
      this.snacker.open('Update Note Failed','Close')
      console.log(error);
      
    })
  }

}
