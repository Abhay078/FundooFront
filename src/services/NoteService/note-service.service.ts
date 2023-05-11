import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
 tokenValue:any;
  constructor(private http:HttpService) { 
    this.tokenValue=localStorage.getItem('token')
  }

  AddNote(data:any){
    let header={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.tokenValue
    })
  }
   return this.http.postMethod('Notes',data,true,header)
  }

  GetNote(){
    let header={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.tokenValue
    })
  }
  return this.http.getMethod('Notes',true,header)
}
UpdateNote(data:any ,id:number){
  let header={
    headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+this.tokenValue
  })

}
return this.http.putMethod(`Notes/Update${id}`,data,true,header)
}

TrashNote(id:number){
  let header={
    headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+this.tokenValue
  })
}
return this.http.putMethod(`Notes/Trash${id}`,{},true,header)
}

Delete(id:number){
  let header={
    headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+this.tokenValue
  })

}
return this.http.deleteMethod(`Notes/${id}`,true,header)
}

ArchiveNote(id:number){
  let header={
    headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+this.tokenValue
  })
}
return this.http.putMethod(`Notes/Archieve${id}`,{},true,header)
}

}
