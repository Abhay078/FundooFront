import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted=false;
  showPass=false;

  constructor(private formBuilder:FormBuilder,private user:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.pattern(/[A-Z]{1}[a-z]{1,}/)]],
      lastName:['',[Validators.required,Validators.pattern(/[A-Z]{1}[a-z]{1,}/)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}/)]],
      confirmPassword:['',[Validators.required]]

    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      console.log("Enter Valid data");
      this._snackBar.open('Enter Valid Data','Close');
      return;
    }
    else{
      let regData={
        "firstName":this.registerForm.value.firstName,
        "lastName":this.registerForm.value.lastName ,
        "email":this.registerForm.value.email ,
        "password":this.registerForm.value.password
      }
      this.user.registration(regData).subscribe((response:any)=>{
        console.log(response);
        this._snackBar.open('Registration Successfull','Close');
      },(error)=>{
        console.log(error)
        console.log(error.status);
        this._snackBar.open('Registration Unsuccessfull','Close');
      })
      
    }
  }
  

}
