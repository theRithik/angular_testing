import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 isLogin=true;
 isLoading=false;
 constructor(private _auth:AuthService, private _route:Router){}
  ngOnInit(): void {
   
  }
  onSwitch(){
this.isLogin=!this.isLogin;
  }


  onSubmit(data:NgForm){
console.log(data.value)
if(!data.valid){
  return 
}
const email=data.value.email;
  const password=data.value.password;
if(this.isLogin){
  this.isLoading=true;
this._auth.signIn(email, password).subscribe((res)=>{
console.log(res)
this.isLoading=false;
this._route.navigate(['home'])
})

}
else{
  
  this.isLoading=true;
  this._auth.signUp(email, password).subscribe((res)=>{
  console.log(res)
  this.isLoading=false;
  })
}
data.reset()
  }

}
