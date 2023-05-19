import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  submitted=false;
  ForgetForm!:FormGroup;


  constructor(private formbuilder:FormBuilder,private user:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ForgetForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.ForgetForm.invalid){
      this._snackBar.open('Enter Valid Data','Close');
      return;
    }
    else{
      let forgetdata=this.ForgetForm.value.email;
      this.user.forget(forgetdata)
      .subscribe((response)=>{
        console.log(response);
        this._snackBar.open('Email Send Successfully','Close');
      },(error)=>{
        console.log(error)
        console.log(error.status);
        this._snackBar.open('Forget Password Failed','Close');
      })
    }
  }

}
