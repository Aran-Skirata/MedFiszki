import { Component, Input, OnInit } from '@angular/core';
import { Observable, range, take } from 'rxjs';
import { ExamQuestions } from 'src/model/ExamQuestions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  ExamQuestions: Observable<ExamQuestions[]> | undefined;
  title:any;
  paramsSub:any;
  correctStyle:string = "bg-success"
  incorrectStyle:string = "bg-danger"
  status:Number = 0;


  constructor(private _firestore: AngularFirestore, private _activatedRoute: ActivatedRoute ) { 


  }

  ngOnInit(): void {

    this.paramsSub = this._activatedRoute.paramMap.subscribe(params => {
      this.title = params.get('title');
      console.log(params);
      this.ExamQuestions = this._firestore.collection<ExamQuestions>(this.title).valueChanges();
    })

  }
  
  ngOnDestroy(): void {

    this.paramsSub.unsubscribe();

  }

  
}
