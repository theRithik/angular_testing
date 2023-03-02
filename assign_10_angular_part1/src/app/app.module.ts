import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes=[
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'home', component:LoaderComponent},
{path:'server', component:HomeComponent}
]



// const appRouter :Routes=[
//   {path:'', redirectTo:'servers', pathMatch:'full'},
//   {path:'home', component:HomeComponent},
//   {
//     path:'servers', component:ServersComponent,
//   children:[
//       {
//         path:':id', component:ServerComponent
//       },
//       {
//         path:':id/edit', component:EditServerComponent
//       }
//     ]
//   },
  
//   {path:'users', component:UsersComponent},
//   {path:'server', component:ServersComponent},
//   // {path:'servers/:id', component:ServerComponent},
//   // {path:'servers/:id/edit', component:EditServerComponent},
//   {path:'**', component:HomeComponent}

  
// ]

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ReactiveFormComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
provide:HTTP_INTERCEPTORS,
useClass:AuthInterceptor,
multi:true
  },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
