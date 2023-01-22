import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
public name : string="";
public questionList:any=[];
public currentquestion:number=0;
public points:number=0
counter=60;
correctanswer:number=0
incorrectanswer:number=0
interval$:any;
progress:string="0"
isquizcompleted : boolean=false
  constructor( private questionService:QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getallquestions()
    this.startcounter()
  }
getallquestions(){
this.questionService.getQuestionJson()
.subscribe((res)=>{
 
  this.questionList=res.questions;
  
})
}
nextquestion(){
this.currentquestion++;
}
previousquestion(){
this.currentquestion--;
}
answer(currentqno:number,option:any){

  if(currentqno===this.questionList.length){
    this.isquizcompleted=true
    this.stopcounter();
  }
  if(option.correct){
    this.points+=10;
    this.correctanswer++;
    setTimeout(() => {
      this.currentquestion++;
      this.resetcounter()
      this.getprogresspercent();
      }, 1000);
   
    
    
  }
  else{
    setTimeout(() => {
      this.currentquestion++;
    this.incorrectanswer++
    this.resetcounter()
    this.getprogresspercent();
      
    }, 1000);
    this.points-=10;
    
   
  }
}
startcounter(){
this.interval$=interval(1000)
.subscribe((val)=>{
  this.counter--;
  if(this.counter==0){
    this.currentquestion++;
    this.counter=60;
    this.points-=10;
  }
});
setTimeout(()=>{
  this.interval$.unsubscribe()

},600000);
}
stopcounter(){
  this.interval$.unsubscribe();
  this.counter=0;

}
resetcounter(){
  this.stopcounter();
  this.counter=60;
  this.startcounter();

}
resetquiz(){
  this.resetcounter();
  this.points=0;
  this.counter=60;
  this.currentquestion=0
  this.progress="0";

}
getprogresspercent(){
  this.progress=((this.currentquestion/this.questionList.length)*100).toString();
  return this.progress
}
}
