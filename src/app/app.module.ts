import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ExamComponent } from './exam/exam.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './exam/question/question.component';
import {HttpClientModule} from '@angular/common/http'
import {PaginationModule} from 'ngx-bootstrap/pagination'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ExamComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
