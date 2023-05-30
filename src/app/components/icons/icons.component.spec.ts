import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteServiceService } from 'src/services/NoteService/note-service.service';
import { IconsComponent } from './icons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
      imports:[
        HttpClientTestingModule,MatSnackBarModule,
        RouterTestingModule,MatMenuModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
