import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  submitted=false;
  ForgetForm!:FormGroup;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.ForgetForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.ForgetForm.invalid){
      return;
    }
    alert('Success!!');
  }

}
