import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
   newNote:any;
  constructor(private note:NoteServiceService) { }
  Notes:any=[];
  ngOnInit(): void {
    this.getNote();
  }
  getNote(){
    this.note.GetNote().subscribe((res:any)=>{
      console.log(res);
      this.Notes=res.filter((e:any)=>{
        return e.archived===false && e.trash === false

      });
    })
  }
 
  receiveMessageDisplayToNote($event:any){
    console.log('note received message '+$event);
    this.getNote();
  }

}
