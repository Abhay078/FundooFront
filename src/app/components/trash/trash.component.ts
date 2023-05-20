import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  
  constructor(private NoteService:NoteServiceService) { }
  TrashNotes:any=[];
  
  ngOnInit(): void {
    this.GetAllTrash();
  } 
  GetAllTrash(){
    this.NoteService.GetNote().subscribe((res:any)=>{
      console.log(res);
      this.TrashNotes=res.filter((e:any)=>{
           return e.trash === true
      });
    })
    
  }
  
  

}
