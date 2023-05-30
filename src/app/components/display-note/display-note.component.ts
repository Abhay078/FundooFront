import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/services/DataService/data-service.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  Search='';
  @Input() AllNotes: any
  @Output() messageToNote = new EventEmitter<any>();
  message: any;
  constructor(public dialog: MatDialog,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res:any)=>{
      this.Search=res;
      console.log(res)
    })
  }
  openDialog(arr: any) {
    const dailogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      height: '190px',
      data: arr
    });
    dailogRef.afterClosed().subscribe((result) => {

      console.log('the dailog is closed', result);
    })
  }
  receiveMessage($event: any) {
    this.message = $event;
    console.log('display received ' + $event);
    this.messageToNote.emit(this.message);
  }
}


