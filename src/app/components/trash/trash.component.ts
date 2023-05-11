import { Component, OnInit } from '@angular/core';
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
  forever_delete(id:number){
      this.NoteService.Delete(id).subscribe((res)=>{
        console.log(res);

      },(error)=>{
        console.log(error)
      })
  }
  UnTrash(id:number){
    this.NoteService.TrashNote(id).subscribe((res)=>{
      console.log(res);
   },(error)=>{
     console.log(error);
   })
  }
  

}
