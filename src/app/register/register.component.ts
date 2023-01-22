import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !:FormGroup;


  constructor( private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      mobile:['',[Validators.required,Validators.minLength(10)]]
    })
  }
  signUp(){
    if(this.signupForm.valid){
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
    .subscribe((res)=>{
      alert("signup successfull");
      this.signupForm.reset();
      this.router.navigateByUrl('login')
    },err=>{
      alert("something went wrong")
    }

  )}
  
  else{
    alert("invalid form!!!!!!please fill it properly")
  }

}
}