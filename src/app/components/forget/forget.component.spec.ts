import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetComponent } from './forget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ForgetComponent', () => {
  let component: ForgetComponent;
  let fixture: ComponentFixture<ForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetComponent ],
      imports:[
        ReactiveFormsModule,HttpClientModule,MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
