import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() NoteId:any;
  componentName:any;
  constructor(private noteService:NoteServiceService,public snackbar:MatSnackBar,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const segments=this.route.snapshot.url;
    this.componentName=segments[segments.length-1]?.path;
    console.log(this.componentName)
    
  }
  Trash(id:number){
    this.noteService.TrashNote(id).subscribe((res)=>{
      this.snackbar.open('Note Trashed Successfully','Close')
       console.log(res);

    },(error)=>{
      this.snackbar.open('Trash Failed','Close')
      console.log(error);
    })

  }
  Archive(id:number){
    this.noteService.ArchiveNote(id).subscribe((res)=>{
      this.snackbar.open('Note Archived Successfully','Close')
      console.log(res);
   },(error)=>{
    this.snackbar.open('Archive failed','Close')
     console.log(error);
   })

  }
  forever_delete(id:number){
    this.noteService.Delete(id).subscribe((res)=>{
      console.log(res);

    },(error)=>{
      console.log(error)
    })
}
UnTrash(id:number){
  this.noteService.TrashNote(id).subscribe((res)=>{
    console.log(res);
 },(error)=>{
   console.log(error);
 })
}

}
