import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() NoteId:any;
  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }
  Trash(id:number){
    this.noteService.TrashNote(id).subscribe((res)=>{
       console.log(res);
    },(error)=>{
      console.log(error);
    })

  }
  Archive(id:number){
    this.noteService.ArchiveNote(id).subscribe((res)=>{
      console.log(res);
   },(error)=>{
     console.log(error);
   })

  }

}
