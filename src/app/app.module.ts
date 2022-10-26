import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AnatomyTranslationsComponent } from './anatomy-translations/anatomy-translations.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './anatomy-translations/question/question.component';
import {HttpClientModule} from '@angular/common/http'
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TopicComponent } from './home/topic/topic.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AnatomyTranslationsComponent,
    QuestionComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPaginationModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzAlertModule,
    NzSpinModule,
    NzToolTipModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
