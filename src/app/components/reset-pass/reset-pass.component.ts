import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private formBuilder:FormBuilder,private user:UserService,private activeRoute:ActivatedRoute,private _snackBar: MatSnackBar) { }
  token:any;
  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}/)]],
      confirmPassword:['',Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  onSubmit(){
    this.submitted=true;
    if(this.resetForm.invalid){
      this._snackBar.open('Enter valid Password Combination','Close')
      return;
    }
    else{
      let forgetdata={
        "newPassword": this.resetForm.value.password,
        "confirmPassword":this.resetForm.value.confirmPassword
      }
      console.log(this.token);
      this.user.reset(forgetdata,this.token)
      .subscribe((response)=>{
        console.log(response);
        this._snackBar.open('Reset password Successfull','Close')
      },(error)=>{
        console.log(error);
        this._snackBar.open('Reset password failed','Close')
      })
    }
  }

}
