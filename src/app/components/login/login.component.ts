import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPass=false;
  submitted=false;
  LoginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router) { }

  ngOnInit(): void {
    this.LoginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}/)]]
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.LoginForm.invalid){
      return;
    }
    else{
      let loginData={
        "email": this.LoginForm.value.email,
        "password":this.LoginForm.value.password
      }
      this.user.login(loginData).subscribe((response:any)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data)
        this.route.navigateByUrl('/home/notes')
      })

    }
    
  }

}
