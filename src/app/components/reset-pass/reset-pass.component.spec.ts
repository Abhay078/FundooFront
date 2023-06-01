import { ComponentFixture, TestBed, async } from '@angular/core/testing';

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
  it('should validate password',async(()=>{
    let password=component.resetForm.controls['password']
    password.setValue('Abhay@123')
    fixture.detectChanges();
    expect(password.valid).toBeTruthy();
  }))
  it('should required password field',async(()=>{
    let password=component.resetForm.controls['password']
    password.setValue(null)
    fixture.detectChanges();
    expect(password.valid).toBeFalsy();
  }))
  it('should toggle password field to text',async(()=>{
    const checkbox=fixture.nativeElement.querySelector('mat-checkbox')
    const password=fixture.nativeElement.querySelector('input[type="password"')
    checkbox.checked=true;
    checkbox.dispatchEvent(new Event('change'))
    fixture.detectChanges();
    expect(password.type).toBe('text');
  }))
});
