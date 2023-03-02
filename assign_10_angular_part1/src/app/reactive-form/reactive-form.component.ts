import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  implements OnInit{
  reactiveForm!: FormGroup;

  constructor(){}
  
  ngOnInit(): void {
   this.reactiveForm = new FormGroup({
     
  fullname: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required, Validators.email]),
  number: new FormControl('',Validators.required ),
   
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirm: new FormControl('',Validators.required),
   })
  }

onSubmit(){
  console.log(this.reactiveForm.get('password')?.value )
  console.log('confirm', this.reactiveForm.get('confirm')?.value)
}

}
