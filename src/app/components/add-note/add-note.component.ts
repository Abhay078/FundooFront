import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 isExpanded=false;
  constructor() { }

  ngOnInit(): void {
  }
  expandDiv(){
this.isExpanded=true;
  }

}