import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 isShow:boolean=false;
 title:string='';
 desc:string='';
 @Output() newNote =new EventEmitter<any>();
  constructor(private note:NoteServiceService,public _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  show(){
    this.isShow=true;
  }
  close(){
    this.isShow=false;
    console.log(this.title,this.desc);
    if(this.title =='' || this.desc==''){
      this._snackbar.open('Please Enter some data','Close')
      return;
    }
    let data={
      "title": this.title,
      "description": this.desc,
      "reminder": new Date(),
      "archived": false,
      "trash": false,
      "isPinned": false
    }
    this.note.AddNote(data).subscribe((res)=>{
      this._snackbar.open('Note Created Successfully','Close')
      this.newNote.emit(data);
      console.log(res);
    },(error)=>{
      console.log(error);
      this._snackbar.open('Adding Note Failed','Close')
    })
  }

}
