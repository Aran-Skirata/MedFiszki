import { Component, Input, OnInit } from '@angular/core';
import { AnatomyTranslations } from 'src/model/AnatomyTranslations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() item:AnatomyTranslations = {id: 0, inPolish:'', inEnglish:'', category:0, part:0}

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
