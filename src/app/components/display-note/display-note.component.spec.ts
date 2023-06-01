import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoteComponent } from './display-note.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';

describe('DisplayNoteComponent', () => {
  let component: DisplayNoteComponent;
  let fixture: ComponentFixture<DisplayNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[
        MatDialogModule
      ],
      declarations: [ DisplayNoteComponent,SearchFilterPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
