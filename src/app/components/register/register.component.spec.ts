import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        ReactiveFormsModule,BrowserAnimationsModule,
        MatSnackBarModule,HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain h3',async(()=>{
       fixture.detectChanges();
       const compiled=fixture.debugElement.nativeElement;
       expect(compiled.querySelector('h3').textContent).toContain('Create Your Google Account')
  }))

  it('should set submitted to true',async(()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }))

  it('form should be invalid without any data',async(()=>{
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['password'].setValue('');
    component.registerForm.controls['confirmPassword'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }))

  it('form should be valid with proper valid data',async(()=>{
    component.registerForm.controls['firstName'].setValue('Abhay');
    component.registerForm.controls['lastName'].setValue('Srivastava');
    component.registerForm.controls['email'].setValue('abhay@gmail.com');
    component.registerForm.controls['password'].setValue('Abhay@123');
    component.registerForm.controls['confirmPassword'].setValue('Abhay@123');
    expect(component.registerForm.valid).toBeTruthy();
  }))

  it('should route correctly to login page',async(()=>{
    const div=fixture.nativeElement.querySelector('.b-link');
    const anchor=div.querySelector('a');
    expect(anchor.getAttribute('routerLink')).toBe('/login')
  }))

  it('should call onSubmit method',async(()=>{
    fixture.detectChanges();
    spyOn(component,'onSubmit')
    const el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }))
});
