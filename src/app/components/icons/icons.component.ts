import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() NoteId: any;
  @Input() selectedColor: any;
  @Output() messageToDisplay = new EventEmitter<any>();
  componentName: any;
  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },]
  constructor(private noteService: NoteServiceService, public snackbar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const segments = this.route.snapshot.url;
    this.componentName = segments[segments.length - 1]?.path;
    console.log(this.componentName)

  }
  Trash(id: number) {
    this.noteService.TrashNote(id).subscribe((res) => {
      this.snackbar.open('Note Trashed Successfully', 'Close')
      console.log(res);
      this.messageToDisplay.emit(res);
    }, (error) => {
      this.snackbar.open('Trash Failed', 'Close')
      console.log(error);
    })

  }
  Archive(id: number) {
    this.noteService.ArchiveNote(id).subscribe((res) => {
      this.snackbar.open('Note Archived Successfully', 'Close')
      this.messageToDisplay.emit(res);
      console.log(res);
    }, (error) => {
      this.snackbar.open('Archive failed', 'Close')
      console.log(error);
    })

  }
  forever_delete(id: number) {
    this.noteService.Delete(id).subscribe((res) => {
      console.log(res);
      this.snackbar.open('Note Deleted Successfully', 'Close')
      this.messageToDisplay.emit(res);
    }, (error) => {
      console.log(error)
    })
  }
  UnTrash(id: number) {
    this.noteService.TrashNote(id).subscribe((res) => {
      console.log(res);
      this.snackbar.open('Note Untrashed Successfully', 'Close')
      this.messageToDisplay.emit(res);
    }, (error) => {
      console.log(error);
    })
  }
  SetColor(id: number, code: string) {
    this.noteService.UpdateColor(id, code).subscribe((res) => {
      console.log(res)
      this.messageToDisplay.emit(res);
    }, (error) => {
      console.log(error);
    })
  }

}
