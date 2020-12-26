import { Injectable } from '@angular/core';
import { ShowQuestion } from '../showquestion';



@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private answers = [];
  private questions: ShowQuestion[] = [];
  private activeQuestion: ShowQuestion;
  private isCorrect: boolean;
  private isSelected: boolean;
  private questionCounter: number;
  private startTime: Date;
  private endTime: Date;
  private duration: number;
  countOfCorrect: number;
  private correctness: number;
  private question = [];

  constructor() { }

  public addQuestions() {
    this.questions = [{
      qoption: 'Who is the Finnish Minister of Justice?',
      options: [
        'Anna-Maja Henriksson',
        'Paavo Väyrynen',
        'Vappu Pimiä'
      ],
      correctOption: 0
    },
    {
      qoption: 'Who was Finland\'s first female prime minister?',
      options: [
        'Tarja Halonen',
        'Sirkka-Liisa Anttila',
        'Riitta Uosukainen',
        'Anneli Jäätteenmäki'
      ],
      correctOption: 3
    },
    {
      qoption: 'Which of the following is not a right-wing party?',
      options: [
        'The Finns Party',
        'The National Coalition Party',
        'The Greens',
        'Movement Now'
      ],
      correctOption: 2
    },
    {
      qoption: 'At what age do Finns get the right to vote?',
      options: [
        'At the age of 16',
        'At the age of 21',
        'At the age of 18',
      ],
      correctOption: 2
    }
    ];
  }

  public getQuestion(): string[] {
  return this.question;

  }
  public setQuestion() {

    this.isCorrect = false;
    this.isSelected = false;
    this.activeQuestion = this.questions[this.questionCounter];
    this.questionCounter++;
    if (this.answers.length < 4) {
      this.question.push(this.activeQuestion.qoption);
      this.question.push(this.activeQuestion.options[this.activeQuestion.correctOption]);
    }

  }
  public initialize() {
    this.question = [];
    this.countOfCorrect = 0;
    this.questionCounter = 0;
    this.startTime = new Date();
    this.setQuestion();

  }

  public getQuestions() {
    return this.questions;
  }
  public getActiveQuestion() {
    return this.activeQuestion;
  }
  public getQuoteOfActiveQuestion(): string {
    return this.activeQuestion.qoption;
  }
  public getOptionsOfActiveQuestion(): string[] {
    return this.activeQuestion.options;
  }
  public getIndexOfActiveQuestion(): number {
    return this.questionCounter;
  }
  public getNumberOfQuestions(): number {
    return this.questions.length;
  }

  public getCorrectOptionOfActiveQuestion(): string {
    return this.activeQuestion.options[this.activeQuestion.correctOption];
  }
  public setOptionSelected() {
    this.isSelected = true;
  }
  public isOptionSelected(): boolean {
    return this.isSelected;
  }

  public isCorrectOption(qoption: number) {
    this.isCorrect =
      (qoption === this.activeQuestion.correctOption) ? true : false;
    return this.isCorrect;
  }
  public isAnswerCorrect(): boolean {
    return this.isCorrect;
  }
  public isFinished(): boolean {
    return (this.questionCounter === this.questions.length)
      ? true : false;
  }
  public getDuration(): number {
    this.endTime = new Date();
    this.duration = this.endTime.getTime() - this.startTime.getTime();
    return this.duration;
  }
  public getCount(): number {
    return this.countOfCorrect;
  }
  public getCorrectness(): number {
    this.correctness = (this.countOfCorrect * 100) / 4;
    return this.correctness;
  }
  public getFeedBack(): string {
    let finalFeedBack = "";
    if (this.correctness < 25) {
      finalFeedBack = "You did not answer correctly at all. You don't seem to follow politics!";
    } else if (this.correctness < 50) {
      finalFeedBack = "You know a little about politics";
    } else if (this.correctness < 75) {
      finalFeedBack = "You have a basic knowledge of politics";
    } else if (this.correctness < 100) {
      finalFeedBack = "You have a lot of knowledge about politics";
    } else {
      finalFeedBack = "Wow! You are an expert";
    }
    return finalFeedBack;
  }







}
