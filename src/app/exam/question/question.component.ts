import { Component, Input, OnInit } from '@angular/core';
import { ExamQuestions } from 'src/model/ExamQuestions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() item:ExamQuestions = {'Answer':'', Question:''}

  correctStyle= "bg-success"
  incorrectStyle= "bg-danger"
  status:Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckAnswer(answerValue: string, question: string) {
    this.status = answerValue.trim() == question.trim() ? 1 : 2;
  }

}
