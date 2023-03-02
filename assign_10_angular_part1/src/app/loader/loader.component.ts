import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { User } from 'src/model/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
  server!: {};
  constructor(private _HTTP:HttpClient, private _auth:AuthService){}
  ngOnInit(): void {
   
  }
  onClick(){
    // this._auth.user.pipe(take(1),
    // exhaustMap((user:any)=>{
    // return this._HTTP.get('https://testing-project-1-4164c-default-rtdb.firebaseio.com/server.json', {
    //     params: new HttpParams().set('auth', user.token)
    //   });
    // })
    // ).subscribe((res)=>{
    //   console.log(res)
    // })
    this.server={
      username:'server 1',
      id:'1',
    }
     
this._HTTP.get('https://testing-project-1-4164c-default-rtdb.firebaseio.com/server.json',this.server).subscribe((val)=>{
  console.log(val)
})
  }
  ontouch(){
this._auth.signOut()
  }
}
