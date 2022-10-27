import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyTranslationsComponent } from './anatomy-translations.component';

describe('ExamComponent', () => {
  let component: AnatomyTranslationsComponent;
  let fixture: ComponentFixture<AnatomyTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatomyTranslationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomyTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
