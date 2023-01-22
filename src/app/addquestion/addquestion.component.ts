import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  public addquizform !:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.addquizform=this.formBuilder.group({
      questionText: "How is a property accessible within a class?",
      options:{
      option1:[''],
      option2:[''],
      option3:[''],
      option4:[''],
     

      },
     
      explanation:['']  
    })
  }
 
  addquiz(){
    


    
    this.http.post<any>("http://localhost:3000/questions",this.addquizform.value)
    .subscribe((res)=>{
      alert("signup successfull");
      this.addquizform.reset();
      this.router.navigateByUrl('welcome')
    },err=>{
      alert("something went wrong")
    }

  )}
}


