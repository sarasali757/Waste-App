import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsRestrntComponent } from './register-as-restrnt.component';

describe('RegisterAsRestrntComponent', () => {
  let component: RegisterAsRestrntComponent;
  let fixture: ComponentFixture<RegisterAsRestrntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsRestrntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsRestrntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
