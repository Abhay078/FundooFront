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
  delete(id:number){
    this.noteService.TrashNote(id).subscribe((res)=>{
       console.log(res);
    },(error)=>{
      console.log(error);
    })

  }

}
