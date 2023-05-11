import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private note:NoteServiceService) { }
  Notes:any=[];
  ngOnInit(): void {
    this.getNote();
  }
  getNote(){
    this.note.GetNote().subscribe((res:any)=>{
      console.log(res);
      this.Notes=res;
    })
  }
}
