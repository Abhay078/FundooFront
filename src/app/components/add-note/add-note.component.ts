import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
  }
  show(){
    this.isShow=true;
  }
  close(){
    this.isShow=false;
    console.log(this.title,this.desc);
    let data={
      "title": this.title,
      "description": this.desc,
      "reminder": new Date(),
      "archived": false,
      "trash": false,
      "isPinned": false
    }
    this.note.AddNote(data).subscribe((res)=>{
      console.log(res);
    })
  }

}
