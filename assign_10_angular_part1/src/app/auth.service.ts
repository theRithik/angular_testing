import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, pipe, tap } from 'rxjs';
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
user = new BehaviorSubject<User>(null!)
  constructor(private _HTTP:HttpClient, private _route:Router) { }
  ngOnInit(): void {
   
  }
  signUp(email:any, password:any){
  return  this._HTTP.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAc81RBKktomgeTkZSr58eJZZeZWq1jx5U',{
      email:email,
      password:password,
      returnSecureToken:true,
    }).pipe(
      tap((res)=>{
this.authtecation(res)
      })
    )
    

  }
  
signIn(email:any, password:any){
return this._HTTP.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAc81RBKktomgeTkZSr58eJZZeZWq1jx5U',{
email:email,
password:password,
returnSecureToken:true,
}).pipe(
  tap((res)=>{
this.authtecation(res)
  })
)
}

authtecation(res:any){
const expirationTime = new Date (new Date().getTime() + res.expiresIn*1000) 
const user = new User (res.email, res.localId, res.idToken, expirationTime)
console.log('>>>>>>>>>>>>>>>>>>>>>>authtecation', user)
this.user.next(user)
localStorage.setItem('userData', JSON.stringify(user))
}
autoSign(){
  const userData = JSON.parse(localStorage.getItem('userData')!)
  console.log(userData)
 
  if(!userData){
    return;
  }
  const loggedInUser=new User(userData.email, userData.id, userData._token, userData._expirationDate)
this.user.next(loggedInUser)
}

signOut(){
  this.user.next(null!)
  this._route.navigate([''])
  localStorage.removeItem('userData')

}

}
