import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyComponent } from './add-survey.component';

describe('AddSurveyComponent', () => {
  let component: AddSurveyComponent;
  let fixture: ComponentFixture<AddSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
