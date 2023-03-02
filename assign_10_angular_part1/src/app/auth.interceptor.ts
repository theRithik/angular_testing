import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor( private _auth: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._auth.user.pipe(take(1),
    exhaustMap((user:any)=>{
        if(!user){
            return next.handle(req)
        }
      const modifer= req.clone({
        params: new HttpParams().set('auth',user.token)
      })
      return next.handle(modifer)
    })
    )
  
    }
}