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
}
