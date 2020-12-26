import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.page.html',
  styleUrls: ['./answers.page.scss'],
})
export class AnswersPage implements OnInit {
  private answerslist= [];
  private questions = [];

  constructor(public router:Router,
    private questionsService: QuestionsService) { }

    
  ngOnInit() {
    this.questionsService.addQuestions();
    this.questions=this.questionsService.getQuestion();
    
  }
  private goHome(){
      
      this.router.navigateByUrl('');
      
  }

}
