import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  submitted=false;
  resetForm!:FormGroup;
  showCheckbox=false;

  constructor(private formBuilder:FormBuilder,private user:UserService) { }

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
      let forgetdata=this.resetForm.value.password;
      this.user.reset(forgetdata)
      .subscribe((response)=>{console.log(response);})
    }
  }

}
