import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassComponent } from './reset-pass.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ResetPassComponent', () => {
  let component: ResetPassComponent;
  let fixture: ComponentFixture<ResetPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassComponent ],
      imports:[
        ReactiveFormsModule,MatSnackBarModule,RouterTestingModule,HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
