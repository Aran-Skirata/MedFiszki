import { Component, Input, OnInit } from '@angular/core';
import { AnatomyTranslations } from 'src/model/AnatomyTranslations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() item:AnatomyTranslations;

  correctStyle= "bg-success"
  incorrectStyle= "bg-danger"
  status:Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckAnswer(answerValue: string, question: string) {
    if(answerValue.length > 0)
        this.status = answerValue.trim().toLowerCase() == question.trim().toLowerCase() ? 1 : 2;
    else {
      this.status = 4;
    }
  }

}
