import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
model:any
  onSubmit(form:NgForm){
console.log()
  }
}
