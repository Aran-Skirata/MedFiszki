import { Component, Input, OnInit } from '@angular/core';
import { Observable, range, take } from 'rxjs';
import { ExamQuestions } from 'src/model/ExamQuestions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  ExamQuestions: Observable<ExamQuestions[]>;

  correctStyle= "bg-success"
  incorrectStyle= "bg-danger"
  status:Number = 0;


  constructor(firestore: AngularFirestore ) { 
    this.ExamQuestions = firestore.collection<ExamQuestions>('AnatomyPlEng').valueChanges();

  }

  ngOnInit(): void {

  }

  
}
