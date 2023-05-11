import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  ArchivedNotes:any=[];
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
    this.GetArchiveNote();
  }
  GetArchiveNote(){
    this.note.GetNote().subscribe((res:any)=>{
      this.ArchivedNotes=res.filter((e:any)=>{
        return e.archived === true
      });
    },(error)=>{
      console.log(error);
    })
  }

}
