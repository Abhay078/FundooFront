import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  submitted=false;
  resetForm!:FormGroup;
  showCheckbox=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}/)]],
      confirmPassword:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.resetForm.invalid){
      return;
    }
    else{
      alert('Success');
    }
  }

}
