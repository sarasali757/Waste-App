import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsComponent } from './register-as.component';

describe('RegisterAsComponent', () => {
  let component: RegisterAsComponent;
  let fixture: ComponentFixture<RegisterAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
