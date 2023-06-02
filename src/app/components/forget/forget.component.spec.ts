import { ComponentFixture, TestBed, async } from '@angular/core/testing';

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
  it('should display the correct logo image',async(()=>{
    let imageSrc:string=`/assets/images/fundoo-notes-logo.png`
    let imageAlt:string='Fundoo'
    const imgElement=fixture.nativeElement.querySelector('img')
    expect(imgElement.src).toContain(imageSrc);
    expect(imgElement.alt).toBe(imageAlt)
  }))

  it('should validate email',async(()=>{
    let email=component.ForgetForm.controls['email']
    email.setValue('abhaysri259@gmail.com')
    fixture.detectChanges();
    expect(email.valid).toBeTruthy();
  }))
  
});
