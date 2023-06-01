import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        ReactiveFormsModule,HttpClientModule,RouterTestingModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate password',async(()=>{
    let password=component.LoginForm.controls['password']
    password.setValue('John')
    fixture.detectChanges();
    expect(password.valid).toBeFalsy();
  }))

  it('should validate email',async(()=>{
    let email=component.LoginForm.controls['email']
    email.setValue('John123')
    fixture.detectChanges();
    expect(email.valid).toBeFalsy();
  }))


  it('should route correctly to register page on clicking on create account',async(()=>{
    const div=fixture.nativeElement.querySelector('.b-link');
    const anchor=div.querySelector('a');
    expect(anchor.getAttribute('routerLink')).toBe('/register')
  }))

  it('should route correctly to forget page on clicking on forget password',async(()=>{
    const el=fixture.debugElement.nativeElement;
    const anchor=el.querySelector('a')
    expect(anchor.getAttribute('routerLink')).toBe('/forget')
  }))

  it('should call onSubmit method',async(()=>{
    fixture.detectChanges();
    spyOn(component,'onSubmit')
    const el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }))
});
