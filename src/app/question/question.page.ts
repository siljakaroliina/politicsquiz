import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  private feedback: string;
  private duration: number;


  constructor(public router: Router, private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.addQuestions();
    this.questionsService.initialize();

  }
  private checkOption(qoption: number) {
    this.questionsService.setOptionSelected();

    if (this.questionsService.isCorrectOption(qoption)) {
      this.questionsService.countOfCorrect++;
      this.feedback =
        this.questionsService.getCorrectOptionOfActiveQuestion() + ' is correct! Correct answers: ' + this.questionsService.countOfCorrect + ' / ' + this.questionsService.getNumberOfQuestions();

    } else {
      this.feedback = 'Incorrect. Correct answers: ' + this.questionsService.countOfCorrect + ' / ' + this.questionsService.getNumberOfQuestions();
    }

  }
  private continue() {
    if (this.questionsService.isFinished()) {
      this.duration = this.questionsService.getDuration();
      this.router.navigateByUrl('result/' + this.duration);
    }
    else {
      this.questionsService.setQuestion();
    }
  }
}
