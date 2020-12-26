import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { QuestionsService }from '../questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  private duration: number;
  private durationSeconds: number;
  private correctAnswers: number;
  private correctness: number;
  private finalFeedBack: string;

  constructor(public router:Router,
    public activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService) { }

  ngOnInit() {
    this.duration = Number(this.activatedRoute.snapshot.paramMap.get('duration'));
    this.durationSeconds = Math.round((this.duration)/1000);
    this.correctAnswers = this.questionsService.getCount();
    this.correctness=this.questionsService.getCorrectness();
    this.finalFeedBack = this.questionsService.getFeedBack();
  }

}
