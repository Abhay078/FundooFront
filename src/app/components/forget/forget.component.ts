import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  submitted=false;
  ForgetForm!:FormGroup;


  constructor(private formbuilder:FormBuilder,private user:UserService) { }

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
    else{
      let forgetdata=this.ForgetForm.value.email;
      this.user.forget(forgetdata)
      .subscribe((response)=>{console.log(response);})
    }
  }

}
